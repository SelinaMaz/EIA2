var a012;
(function (a012) {
    class Circle {
        constructor(_x, _y, _dx, _dy, _radius, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.radius = _radius;
            this.color = "#30363B";
        }
        draw(_x, _y, _radius, _color) {
            a012.c.beginPath();
            a012.c.arc(_x, _y, _radius, 0, Math.PI * 2, true);
            a012.c.strokeStyle = _color;
            a012.c.stroke();
        }
        ;
        update() {
            if (this.x + this.radius > a012.canvas.width || this.x - this.radius < 8) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > a012.canvas.height || this.y - this.radius < 8) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            //Interaktion, Maus und Canvas
            if (a012.mouse.x - this.x < 50 && a012.mouse.x - this.x > -50 && a012.mouse.y - this.y < 50 && a012.mouse.y - this.y > -50) {
                if (this.radius < a012.maxRadius) {
                    this.radius += 1;
                    this.color = a012.colorArray[Math.floor(Math.random() * a012.colorArray.length)];
                }
            }
            else if (this.radius > a012.minRadius) {
                this.radius -= 1;
                this.color = "#30363B";
            }
            this.draw(this.x, this.y, this.radius, this.color);
        }
        ;
    }
    a012.Circle = Circle;
})(a012 || (a012 = {}));
//# sourceMappingURL=circle.js.map