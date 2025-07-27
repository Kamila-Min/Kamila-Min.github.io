import { offsetPoint } from './utils/geometry-utils/offset-point.js';
import { validateConnection } from './utils/geometry-utils/validate-connection.js';
import { approximatelyEqual, pointInsideRect } from './utils/path-utils/checking-utils.js';
import { simplifyPath } from './utils/path-utils/simplify-path.js';
import { generateCandidatePaths } from './utils/path-utils/generate-paths.js';
import { filterValidPaths } from './utils/path-utils/filter-valid-paths.js';
import { chooseBestPath } from './utils/path-utils/choose-best-path.js';
const OFFSET = 20;
export const dataConverter = (rect1, rect2, cPoint1, cPoint2) => {
    validateConnection(rect1, cPoint1);
    validateConnection(rect2, cPoint2);
    const p1 = offsetPoint(cPoint1.point, cPoint1.angle, OFFSET);
    const p2 = offsetPoint(cPoint2.point, cPoint2.angle, OFFSET);
    const isNotOrthogonal = !approximatelyEqual(p1.x, p2.x) && !approximatelyEqual(p1.y, p2.y);
    const p1InsideRect2 = pointInsideRect(p1, rect2);
    const p2InsideRect1 = pointInsideRect(p2, rect1);
    if (isNotOrthogonal && (p1InsideRect2 || p2InsideRect1)) {
        const offsetY = (p1.y < p2.y ? -1 : 1) * OFFSET * 2;
        const midY = p1.y + offsetY;
        const uPath = [p1, { x: p1.x, y: midY }, { x: p2.x, y: midY }, p2];
        const fullPath = [cPoint1.point, ...uPath, cPoint2.point];
        return simplifyPath(fullPath);
    }
    const candidatePaths = generateCandidatePaths(p1, p2, [rect1, rect2], OFFSET);
    const validPaths = filterValidPaths(candidatePaths, [rect1, rect2]);
    if (validPaths.length === 0) {
        return [cPoint1.point, p1, p2, cPoint2.point];
    }
    const bestPath = chooseBestPath(validPaths);
    const fullPath = [cPoint1.point, ...bestPath, cPoint2.point];
    return simplifyPath(fullPath);
};
