namespace a08_Canvas {
    export class Blume extends Flower {
        pointColor: string;

        constructor(_x: number, _y: number, _size: number, _color: string, _pointColor: string, _flowerType: string) {
            super(_x, _y, _size, _color, _flowerType);
            this.pointColor = _pointColor;
        }

        blume(_pointColor: string, _color: string, _x: number, _y: number, _size: number, _flowerType: string): void {
            can2.beginPath();
            can2.moveTo(_x + 0.5, _y - 15);
            can2.fillStyle = _color;
            can2.strokeStyle = _color;
            can2.arc(_x - 3, _y - 12, _size, 0, Math.PI * 2, true);
            can2.arc(_x - 6, _y - 16, _size, 0, Math.PI * 2, true);
            can2.arc(_x - 3, _y - 21, _size, 0, Math.PI * 2, true);
            can2.arc(_x + 3, _y - 21, _size, 0, Math.PI * 2, true);
            can2.arc(_x + 6, _y - 17, _size, 0, Math.PI * 2, true);
            can2.arc(_x + 4, _y - 16, _size, 0, Math.PI * 2, true);
            can2.arc(_x + 3, _y - 12, _size, 0, Math.PI * 2, true);
            can2.stroke();
            can2.fill();
            //Punkt
            can2.beginPath();
            can2.fillStyle = _pointColor;
            can2.arc(_x, _y - 16, 3, 0, Math.PI * 2, true);
            can2.fill();
            can2.closePath();
        }

        draw(): void {
            switch (this.flowerType) {
                case "blume":
                    this.blume("#F5A9A9", "white", this.x - 25, this.y - 6, 5, "blume");
                    break;
            }

        }
    }
}