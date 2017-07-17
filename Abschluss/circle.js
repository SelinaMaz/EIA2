var a012;
(function (a012) {
    class Circle {
        //        color: any;
        constructor(_x, _y, _dx, _dy, _radius /*, _color: number*/) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.radius = _radius;
            //            this.color = colorArray[Math.floor[Math.random() * colorArray.length]];
        }
        draw() {
            a012.c.beginPath();
            a012.c.arc(this.x, this.y, this.radius, 8, Math.PI * 2, false);
            a012.c.fillStyle = "black";
            a012.c.fill();
        }
        ;
        update() {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 8) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 8) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            //Interaktion mit der Maus
            if (a012.mouse.x - this.x < 50 && a012.mouse.x - this.x > -50 && a012.mouse.y - this.y < 50 && a012.mouse.y - this.y > -50) {
                if (this.radius < a012.maxRadius) {
                    this.radius += 1;
                }
            }
            else if (this.radius > a012.minRadius) {
                this.radius -= 1;
            }
            this.draw();
        }
        ;
    }
    a012.Circle = Circle;
})(a012 || (a012 = {}));
//# sourceMappingURL=circle.js.map