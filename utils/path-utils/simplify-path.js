import { approximatelyEqual } from './checking-utils.js';
export function simplifyPath(path) {
    if (path.length <= 2)
        return path;
    const simplified = [path[0]];
    for (let i = 1; i < path.length - 1; i++) {
        const prev = simplified[simplified.length - 1];
        const curr = path[i];
        const next = path[i + 1];
        const onVerticalLine = approximatelyEqual(curr.x, prev.x) && approximatelyEqual(curr.x, next.x);
        const onHorizontalLine = approximatelyEqual(curr.y, prev.y) && approximatelyEqual(curr.y, next.y);
        if (onVerticalLine || onHorizontalLine) {
            continue;
        }
        simplified.push(curr);
    }
    simplified.push(path[path.length - 1]);
    return simplified;
}

