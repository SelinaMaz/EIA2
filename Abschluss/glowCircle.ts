namespace a012 {
    export class GlowCircle extends Circle {
        constructor(_x: number, _y: number, _dx: number, _dy: number, _radius: number, _color: string) {
            super(_x, _y, _dx, _dy, _radius, _color);
        }

        draw(_x: number, _y: number): void {
            c.beginPath();
            c.arc(_x, _y, this.radius, 0, Math.PI * 2, true);
            c.fillStyle = this.color;
            c.strokeStyle = "#fffacd";
            c.shadowColor = "#FFFFFF";
            c.shadowBlur = 20;
            c.shadowOffsetX = 0;
            c.shadowOffsetY = 0;
            c.stroke();
        };
    }
}