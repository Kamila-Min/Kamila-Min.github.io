export function chooseBestPath(paths) {
    var _a;
    const lengthAndTurns = (pts) => {
        let length = 0;
        let turns = 0;
        for (let i = 1; i < pts.length; i++) {
            length += Math.abs(pts[i].x - pts[i - 1].x) + Math.abs(pts[i].y - pts[i - 1].y);
            if (i > 1) {
                const dx1 = pts[i - 1].x - pts[i - 2].x;
                const dy1 = pts[i - 1].y - pts[i - 2].y;
                const dx2 = pts[i].x - pts[i - 1].x;
                const dy2 = pts[i].y - pts[i - 1].y;
                if (dx1 !== dx2 || dy1 !== dy2)
                    turns++;
            }
        }
        return { length, turns };
    };
    return (_a = paths.reduce((best, curr) => {
        if (!best)
            return curr;
        const currLT = lengthAndTurns(curr);
        const bestLT = lengthAndTurns(best);
        if (currLT.length < bestLT.length)
            return curr;
        if (currLT.length === bestLT.length && currLT.turns < bestLT.turns)
            return curr;
        return best;
    }, null)) !== null && _a !== void 0 ? _a : [];
}
