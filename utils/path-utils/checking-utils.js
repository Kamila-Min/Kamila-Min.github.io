const EPSILON = 1e-6;
export const approximatelyEqual = (a, b) => Math.abs(a - b) < EPSILON;
export function intersectsAnyRect(p1, p2, rects) {
    for (const rect of rects) {
        const left = rect.position.x - rect.size.width / 2;
        const right = rect.position.x + rect.size.width / 2;
        const top = rect.position.y - rect.size.height / 2;
        const bottom = rect.position.y + rect.size.height / 2;
        if (approximatelyEqual(p1.x, p2.x)) {
            const x = p1.x;
            const yMin = Math.min(p1.y, p2.y);
            const yMax = Math.max(p1.y, p2.y);
            if (x > left && x < right && !(yMax < top || yMin > bottom))
                return true;
        }
        if (approximatelyEqual(p1.y, p2.y)) {
            const y = p1.y;
            const xMin = Math.min(p1.x, p2.x);
            const xMax = Math.max(p1.x, p2.x);
            if (y > top && y < bottom && !(xMax < left || xMin > right))
                return true;
        }
    }
    return false;
}
export function pointInsideRect(p, rect) {
    const left = rect.position.x - rect.size.width / 2;
    const right = rect.position.x + rect.size.width / 2;
    const top = rect.position.y - rect.size.height / 2;
    const bottom = rect.position.y + rect.size.height / 2;
    return p.x > left && p.x < right && p.y > top && p.y < bottom;
}
