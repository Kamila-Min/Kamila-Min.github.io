const add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
const scale = (v, s) => ({ x: v.x * s, y: v.y * s });
const directionFromAngle = (angle) => {
    const normalized = ((angle % 360) + 360) % 360;
    const directions = {
        0: { x: 1, y: 0 },
        90: { x: 0, y: 1 },
        180: { x: -1, y: 0 },
        270: { x: 0, y: -1 },
    };
    if (!(normalized in directions))
        throw new Error(`Unsupported angle: ${angle}`);
    return directions[normalized];
};
export const offsetPoint = (pt, angle, offset) => {
    const dir = directionFromAngle(angle);
    return add(pt, scale(dir, offset));
};
