namespace a08_Canvas {
    export class Tulpe extends Flower {
        constructor(_x: number, _y: number, _size: number, _color: string, _flowerType: string) {
            super(_x, _y, _size, _color, _flowerType);
        }

        draw(): void {
            can2.beginPath();
            can2.fillStyle = "#F78181";
            can2.arc(this.x + 8, this.y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            can2.closePath();
            can2.fill();
            can2.beginPath();
            can2.moveTo(this.x, this.y - 32);
            can2.lineTo(this.x, this.y - 40);
            can2.lineTo(this.x + 5, this.y - 32);
            can2.lineTo(this.x + 8, this.y - 40);
            can2.lineTo(this.x + 11, this.y - 32);
            can2.lineTo(this.x + 16, this.y - 40);
            can2.lineTo(this.x + 16, this.y - 32);
            can2.fill();
        }
    }
}