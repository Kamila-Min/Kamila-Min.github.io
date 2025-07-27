import { dataConverter } from './data-converter';
function createRect(x, y, width, height) {
    return {
        position: { x, y },
        size: { width, height },
    };
}
function createConn(x, y, angle) {
    return {
        point: { x, y },
        angle,
    };
}
describe('dataConverter', () => {
    it('should throw error if connection point is not on rect border', () => {
        const rect1 = createRect(200, 100, 80, 80);
        const rect2 = createRect(200, 300, 80, 80);
        const c1 = createConn(200, 200, 0);
        const c2 = createConn(200, 260, 270);
        expect(() => dataConverter(rect1, rect2, c1, c2)).toThrowError();
    });
    it('should throw error if angle is not valid for the side', () => {
        const rect1 = createRect(100, 100, 80, 80);
        const rect2 = createRect(300, 100, 80, 80);
        const c1 = createConn(140, 100, 90);
        const c2 = createConn(260, 100, 180);
        expect(() => dataConverter(rect1, rect2, c1, c2)).toThrowError();
    });
    it('should produce orthogonal segments only', () => {
        const rect1 = createRect(200, 200, 100, 100);
        const rect2 = createRect(400, 300, 100, 100);
        const c1 = createConn(250, 200, 0);
        const c2 = createConn(350, 300, 180);
        const path = dataConverter(rect1, rect2, c1, c2);
        for (let i = 1; i < path.length; i++) {
            const dx = Math.abs(path[i].x - path[i - 1].x);
            const dy = Math.abs(path[i].y - path[i - 1].y);
            expect(dx === 0 || dy === 0).toBeTrue();
        }
    });
    it('should return direct horizontal path between two aligned rectangles', () => {
        const rect1 = createRect(100, 100, 80, 80);
        const rect2 = createRect(300, 100, 80, 80);
        const c1 = createConn(140, 100, 0);
        const c2 = createConn(260, 100, 180);
        const path = dataConverter(rect1, rect2, c1, c2);
        expect(path[0]).toEqual(c1.point);
        expect(path[path.length - 1]).toEqual(c2.point);
        expect(path.length).toBeGreaterThanOrEqual(2);
    });
    it('should return direct vertical path if rectangles are vertically aligned', () => {
        const rect1 = createRect(200, 100, 80, 80);
        const rect2 = createRect(200, 300, 80, 80);
        const c1 = createConn(200, 140, 90);
        const c2 = createConn(200, 260, 270);
        const path = dataConverter(rect1, rect2, c1, c2);
        expect(path[0]).toEqual(c1.point);
        expect(path[path.length - 1]).toEqual(c2.point);
    });
    it('should choose a path with minimal number of turns', () => {
        const rect1 = createRect(100, 100, 80, 80);
        const rect2 = createRect(300, 160, 80, 80);
        const c1 = createConn(140, 100, 0);
        const c2 = createConn(260, 160, 180);
        const path = dataConverter(rect1, rect2, c1, c2);
        expect(path[0]).toEqual(c1.point);
        expect(path[path.length - 1]).toEqual(c2.point);
        for (let i = 1; i < path.length; i++) {
            const dx = Math.abs(path[i].x - path[i - 1].x);
            const dy = Math.abs(path[i].y - path[i - 1].y);
            expect(dx === 0 || dy === 0).toBeTrue();
        }
        let turns = 0;
        for (let i = 2; i < path.length; i++) {
            const dx1 = path[i - 1].x - path[i - 2].x;
            const dy1 = path[i - 1].y - path[i - 2].y;
            const dx2 = path[i].x - path[i - 1].x;
            const dy2 = path[i].y - path[i - 1].y;
            if (dx1 !== dx2 || dy1 !== dy2)
                turns++;
        }
        expect(turns).toBeLessThanOrEqual(2);
    });
});
