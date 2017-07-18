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

        draw(_x: number, _y: number, _radius: number, _color: string): void {
            c.beginPath();
            c.arc(_x, _y, _radius, 0, Math.PI * 2, true);
            c.fillStyle = _color;
            c.fill();
        };

        update(_x: number, _y: number, _dx: number, _dy: number, _radius: number, _color: string ): void {
            if (_x + _radius > canvas.width || _x - _radius < 8) {
                _dx = -_dx;
            }
            if (_y + _radius > canvas.height || _y - _radius < 8) {
                _dy = -_dy;
            }
            _x += _dx;
            _y += _dy;

            //Interaktion, Maus und Canvas
            if (mouse.x - _x < 50 && mouse.x - _x > -50 && mouse.y - _y < 50 && mouse.y - _y > -50) {
                if (_radius < maxRadius) {
                    _radius += 1;
                }
            }
            else if (_radius > minRadius) {
                _radius -= 1;
            }
            this.draw(_x, _y, _radius, _color);
        };
    }
}
