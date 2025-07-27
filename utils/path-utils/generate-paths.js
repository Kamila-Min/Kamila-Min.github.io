function getRectOffsets(rect, offset) {
    return {
        left: rect.position.x - rect.size.width / 2 - offset,
        right: rect.position.x + rect.size.width / 2 + offset,
        top: rect.position.y - rect.size.height / 2 - offset,
        bottom: rect.position.y + rect.size.height / 2 + offset,
    };
}
export function generateCandidatePaths(start, end, rects, offset) {
    const paths = [];
    const offsets1 = getRectOffsets(rects[0], offset);
    const offsets2 = getRectOffsets(rects[1], offset);
    paths.push([start, { x: end.x, y: start.y }, end]);
    paths.push([start, { x: start.x, y: end.y }, end]);
    const xs = [offsets1.left, offsets1.right, offsets2.left, offsets2.right];
    const ys = [offsets1.top, offsets1.bottom, offsets2.top, offsets2.bottom];
    for (const x of xs) {
        for (const y of ys) {
            paths.push([
                start,
                { x, y: start.y },
                { x, y },
                { x: end.x, y },
                end
            ]);
            paths.push([
                start,
                { x: start.x, y },
                { x, y },
                { x: end.x, y },
                end
            ]);
        }
    }
    return paths;
}
