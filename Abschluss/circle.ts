namespace a012 {
    export class Circle {
        x: number;
        y: number;
        dx: number; //Geschwindigkeit in x-Richtung
        dy: number; //Geschwindigkeit in y-Richtung
        radius: number;
        color: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _radius: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy; 
            this.radius = _radius;
            this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        }

        draw(): void {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 8, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        };

        update(): void {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 8) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 8) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            //Interaktion Maus und Canvas
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            }
            else if (this.radius > minRadius) {
                this.radius -= 1;
            }
            this.draw();
        };
    }
}