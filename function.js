const EPSILON = 1e-6;
const OFFSET = 20;
function validateConnection(rect, connPoint) {
    var _a;
    const angleNorm = ((connPoint.angle % 360) + 360) % 360;
    const left = rect.position.x - rect.size.width / 2;
    const right = rect.position.x + rect.size.width / 2;
    const top = rect.position.y - rect.size.height / 2;
    const bottom = rect.position.y + rect.size.height / 2;
    const p = connPoint.point;
    const eps = 1e-3;
    const onLeft = Math.abs(p.x - left) < eps && p.y >= top - eps && p.y <= bottom + eps;
    const onRight = Math.abs(p.x - right) < eps && p.y >= top - eps && p.y <= bottom + eps;
    const onTop = Math.abs(p.y - top) < eps && p.x >= left - eps && p.x <= right + eps;
    const onBottom = Math.abs(p.y - bottom) < eps && p.x >= left - eps && p.x <= right + eps;
    const sideAngleMap = {
        left: 180,
        right: 0,
        top: 270,
        bottom: 90,
    };
    const sideCheckMap = {
        left: onLeft,
        right: onRight,
        top: onTop,
        bottom: onBottom,
    };
    const side = ((_a = Object.entries(sideCheckMap).find(([_, v]) => v)) !== null && _a !== void 0 ? _a : [null])[0];
    const errorMessage = side === null
        ? 'Точка подключения не лежит на границе прямоугольника'
        : angleNorm !== sideAngleMap[side]
            ? `Угол подключения на стороне ${side} должен быть ${sideAngleMap[side]}°`
            : null;
    errorMessage && (() => { throw new Error(errorMessage); })();
}
const approximatelyEqual = (a, b) => Math.abs(a - b) < EPSILON;
const add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
const scale = (v, s) => ({ x: v.x * s, y: v.y * s });
const directionFromAngle = (angle) => {
    var _a;
    const normalized = ((angle % 360) + 360) % 360;
    const directions = {
        0: { x: 1, y: 0 },
        90: { x: 0, y: 1 },
        180: { x: -1, y: 0 },
        270: { x: 0, y: -1 },
    };
    return (_a = directions[normalized]) !== null && _a !== void 0 ? _a : (() => { throw new Error(`Unsupported angle: ${angle}`); })();
};
const offsetPoint = (pt, angle, offset) => {
    const dir = directionFromAngle(angle);
    return add(pt, scale(dir, offset));
};
export const dataConverter = (rect1, rect2, cPoint1, cPoint2) => {
    validateConnection(rect1, cPoint1);
    validateConnection(rect2, cPoint2);
    const p1 = offsetPoint(cPoint1.point, cPoint1.angle, OFFSET);
    const p2 = offsetPoint(cPoint2.point, cPoint2.angle, OFFSET);
    function simplifyOrthogonalPath(path) {
        if (path.length <= 2)
            return path;
        const simplified = [path[0]];
        for (let i = 1; i < path.length - 1; i++) {
            const prev = simplified[simplified.length - 1];
            const curr = path[i];
            const next = path[i + 1];
            // Проверяем, лежит ли curr на прямой между prev и next (с учётом погрешности)
            const onVerticalLine = approximatelyEqual(curr.x, prev.x) && approximatelyEqual(curr.x, next.x);
            const onHorizontalLine = approximatelyEqual(curr.y, prev.y) && approximatelyEqual(curr.y, next.y);
            if (onVerticalLine || onHorizontalLine) {
                // curr — лишняя точка, пропускаем её
                continue;
            }
            simplified.push(curr);
        }
        simplified.push(path[path.length - 1]);
        return simplified;
    }
    function orthogonalPath(start, end) {
        if (approximatelyEqual(start.x, end.x) || approximatelyEqual(start.y, end.y)) {
            return [start, end];
        }
        const via1 = [start, { x: end.x, y: start.y }, end];
        const via2 = [start, { x: start.x, y: end.y }, end];
        const length = (pts) => pts.slice(1).reduce((acc, pt, i) => acc + Math.hypot(pt.x - pts[i].x, pt.y - pts[i].y), 0);
        return length(via1) <= length(via2) ? via1 : via2;
    }
    const mainPath = orthogonalPath(p1, p2);
    const simplifiedPath = simplifyOrthogonalPath(mainPath);
    const fullPath = [
        cPoint1.point,
        ...simplifiedPath.slice(1, -1),
        cPoint2.point,
    ];
    return fullPath;
};
