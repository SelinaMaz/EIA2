namespace a07_Canvas {
    export class Flower {
        x: number;
        y: number;
        size: number;
        color: string;
        pointColor: string;
        flowerType: string;

        constructor(_x: number, _y: number, _size: number, _color: string, _pointColor: string, _flowerType: string) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
            this.pointColor = _pointColor;
            this.flowerType = _flowerType;
            this.draw();
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

            _flowerType = "blume";
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

            _flowerType = "tulpe";
        }

        draw(): void {
            switch (this.flowerType) {
                case "blume":
                    this.blume("#F5A9A9", "white", this.x - 25, this.y - 6, 5, "blume");
                    break;
                case "tulpe":
                    this.tulpe(this.x + 40, this.y - 5, "tulpe");
                    break;
            }

        }

        update(): void {
            this.draw();
        }
    }
}
