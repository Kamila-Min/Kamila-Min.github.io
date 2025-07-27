function getConnectedSide(sideCheckMap) {
    for (const [key, value] of Object.entries(sideCheckMap)) {
        if (value) {
            return key;
        }
    }
    return null;
}
export function validateConnection(rect, connPoint) {
    const angleNorm = ((connPoint.angle % 360) + 360) % 360;
    const left = rect.position.x - rect.size.width / 2;
    const right = rect.position.x + rect.size.width / 2;
    const top = rect.position.y - rect.size.height / 2;
    const bottom = rect.position.y + rect.size.height / 2;
    const p = connPoint.point;
    const eps = 1e-3;
    const onLeft = (Math.abs(p.x - left) < eps) &&
        (p.y >= (top - eps)) &&
        (p.y <= (bottom + eps));
    const onRight = (Math.abs(p.x - right) < eps) &&
        (p.y >= (top - eps)) &&
        (p.y <= (bottom + eps));
    const onTop = (Math.abs(p.y - top) < eps) &&
        (p.x >= (left - eps)) &&
        (p.x <= (right + eps));
    const onBottom = (Math.abs(p.y - bottom) < eps) &&
        (p.x >= (left - eps)) &&
        (p.x <= (right + eps));
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
    const side = getConnectedSide(sideCheckMap);
    const errorMessage = side === null
        ? 'The connection point is not on the rectangle boundary'
        : angleNorm !== sideAngleMap[side]
            ? `The connection angle on side ${side} must be ${sideAngleMap[side]}°`
            : null;
    if (errorMessage)
        throw new Error(errorMessage);
}
