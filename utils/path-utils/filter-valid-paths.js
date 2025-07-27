import { intersectsAnyRect } from './checking-utils.js';
export function filterValidPaths(paths, rects) {
    return paths.filter(path => {
        for (let i = 0; i < path.length - 1; i++) {
            if (intersectsAnyRect(path[i], path[i + 1], rects))
                return false;
        }
        return true;
    });
}
