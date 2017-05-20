namespace a08_Canvas {
    export class Tulpe extends Flower {
        constructor(_x: number, _y: number, _size: number, _color: string, _flowerType: string) {
            super(_x, _y, _size, _color, _flowerType);
        }

        tulpe(_x: number, _y: number, _flowerType: string): void {
            can2.beginPath();
            can2.fillStyle = "#F78181";
            can2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            can2.closePath();
            can2.fill();
            can2.beginPath();
            can2.moveTo(_x, _y - 32);
            can2.lineTo(_x, _y - 40);
            can2.lineTo(_x + 5, _y - 32);
            can2.lineTo(_x + 8, _y - 40);
            can2.lineTo(_x + 11, _y - 32);
            can2.lineTo(_x + 16, _y - 40);
            can2.lineTo(_x + 16, _y - 32);
            can2.fill();
        }

        draw(): void {
            switch (this.flowerType) {
                case "tulpe":
                    this.tulpe(this.x + 40, this.y - 5, "tulpe");
                    break;
            }

        }
    }
}