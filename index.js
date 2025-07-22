import { dataConverter } from './function.js';
const rect1 = {
    position: { x: 500, y: 200 },
    size: { width: 100, height: 100 },
};
const rect2 = {
    position: { x: 300, y: 400 },
    size: { width: 150, height: 90 },
};
const cPoint1 = {
    point: {
        x: rect1.position.x - rect1.size.width / 2,
        y: rect1.position.y,
    },
    angle: 180,
};
const cPoint2 = {
    point: {
        x: rect2.position.x,
        y: rect2.position.y - rect2.size.height / 2,
    },
    angle: 270,
};
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 1000;
const radius = 6; // радиус круга для точек подключения
// Проверяем, внутри ли мышь круга
function isPointInCircle(p, center, r) {
    return Math.pow((p.x - center.x), 2) + Math.pow((p.y - center.y), 2) <= r * r;
}
// Проверяем, внутри ли мышь прямоугольника
function isPointInRect(p, rect) {
    const left = rect.position.x - rect.size.width / 2;
    const right = rect.position.x + rect.size.width / 2;
    const top = rect.position.y - rect.size.height / 2;
    const bottom = rect.position.y + rect.size.height / 2;
    return p.x >= left && p.x <= right && p.y >= top && p.y <= bottom;
}
// Отрисовка прямоугольника
function drawRect(rect, color = '#88c') {
    ctx.fillStyle = color;
    ctx.fillRect(rect.position.x - rect.size.width / 2, rect.position.y - rect.size.height / 2, rect.size.width, rect.size.height);
}
// Отрисовка круга (точка подключения)
function drawCircle(point, color = 'red') {
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
// Отрисовка ломаной линии (пути)
function drawPolyline(points, color = 'black') {
    if (points.length === 0)
        return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
}
// Переменная для определения, что перетаскиваем
let dragging = null;
let dragOffset = { x: 0, y: 0 };
// Главная функция перерисовки
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Вычисляем ортогональный путь
    const path = dataConverter(rect1, rect2, cPoint1, cPoint2);
    console.log('Путь:', path);
    // Отрисовываем прямоугольники, путь и точки подключения
    drawRect(rect1, '#88c');
    drawRect(rect2, '#c88');
    drawPolyline(path);
    drawCircle(cPoint1.point);
    drawCircle(cPoint2.point);
}
render();
// --- Обработчики мыши ---
canvas.addEventListener('mousedown', (e) => {
    const mousePos = { x: e.offsetX, y: e.offsetY };
    if (isPointInCircle(mousePos, cPoint1.point, radius)) {
        dragging = 'cPoint1';
        return;
    }
    if (isPointInCircle(mousePos, cPoint2.point, radius)) {
        dragging = 'cPoint2';
        return;
    }
    if (isPointInRect(mousePos, rect1)) {
        dragging = 'rect1';
        dragOffset = { x: mousePos.x - rect1.position.x, y: mousePos.y - rect1.position.y };
        return;
    }
    if (isPointInRect(mousePos, rect2)) {
        dragging = 'rect2';
        dragOffset = { x: mousePos.x - rect2.position.x, y: mousePos.y - rect2.position.y };
        return;
    }
});
// Обновляет точку подключения (и угол) при перетаскивании точки подключения
export function snapPointToRectSide(mousePos, rect, cp) {
    const { x, y } = rect.position;
    const { width, height } = rect.size;
    const left = x - width / 2;
    const right = x + width / 2;
    const top = y - height / 2;
    const bottom = y + height / 2;
    const dx = mousePos.x - x;
    const dy = mousePos.y - y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const eps = 1e-2;
    if (absDx > absDy) {
        // Слева или справа
        if (dx < 0) {
            // Левая грань
            cp.angle = 180;
            cp.point = {
                x: left,
                y: Math.max(top + eps, Math.min(bottom - eps, mousePos.y)),
            };
        }
        else {
            // Правая грань
            cp.angle = 0;
            cp.point = {
                x: right,
                y: Math.max(top + eps, Math.min(bottom - eps, mousePos.y)),
            };
        }
    }
    else {
        // Сверху или снизу
        if (dy < 0) {
            // Верхняя грань
            cp.angle = 270;
            cp.point = {
                x: Math.max(left + eps, Math.min(right - eps, mousePos.x)),
                y: top,
            };
        }
        else {
            // Нижняя грань
            cp.angle = 90;
            cp.point = {
                x: Math.max(left + eps, Math.min(right - eps, mousePos.x)),
                y: bottom,
            };
        }
    }
}
canvas.addEventListener('mousemove', (e) => {
    if (!dragging)
        return;
    const mousePos = { x: e.offsetX, y: e.offsetY };
    switch (dragging) {
        case 'rect1':
            const dx1 = mousePos.x - dragOffset.x - rect1.position.x;
            const dy1 = mousePos.y - dragOffset.y - rect1.position.y;
            rect1.position.x += dx1;
            rect1.position.y += dy1;
            cPoint1.point.x += dx1;
            cPoint1.point.y += dy1;
            break;
        case 'rect2':
            const dx2 = mousePos.x - dragOffset.x - rect2.position.x;
            const dy2 = mousePos.y - dragOffset.y - rect2.position.y;
            rect2.position.x += dx2;
            rect2.position.y += dy2;
            cPoint2.point.x += dx2;
            cPoint2.point.y += dy2;
            break;
        case 'cPoint1':
        case 'cPoint2':
            const cp = dragging === 'cPoint1' ? cPoint1 : cPoint2;
            const rect = dragging === 'cPoint1' ? rect1 : rect2;
            snapPointToRectSide(mousePos, rect, cp);
            break;
    }
    render();
});
canvas.addEventListener('mouseup', () => {
    dragging = null;
});
canvas.addEventListener('mouseleave', () => {
    dragging = null;
});
