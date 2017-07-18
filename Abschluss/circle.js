var a012;
(function (a012) {
    class Circle {
        constructor(_x, _y, _dx, _dy, _radius, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.radius = _radius;
            this.color = a012.colorArray[Math.floor(Math.random() * a012.colorArray.length)];
        }
        draw(_x, _y, _radius, _color) {
            a012.c.beginPath();
            a012.c.arc(_x, _y, _radius, 0, Math.PI * 2, true);
            a012.c.fillStyle = _color;
            a012.c.fill();
        }
        ;
        update(_x, _y, _dx, _dy, _radius, _color) {
            if (_x + _radius > a012.canvas.width || _x - _radius < 8) {
                _dx = -_dx;
            }
            if (_y + _radius > a012.canvas.height || _y - _radius < 8) {
                _dy = -_dy;
            }
            _x += _dx;
            _y += _dy;
            //Interaktion, Maus und Canvas
            if (a012.mouse.x - _x < 50 && a012.mouse.x - _x > -50 && a012.mouse.y - _y < 50 && a012.mouse.y - _y > -50) {
                if (_radius < a012.maxRadius) {
                    _radius += 1;
                }
            }
            else if (_radius > a012.minRadius) {
                _radius -= 1;
            }
            this.draw(_x, _y, _radius, _color);
        }
        ;
    }
    a012.Circle = Circle;
})(a012 || (a012 = {}));
//# sourceMappingURL=circle.js.map