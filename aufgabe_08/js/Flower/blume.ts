namespace a08_Canvas {
    export class Blume extends Flower {
        pointColor: string;

        constructor(_x: number, _y: number, _size: number, _color: string, _pointColor: string, _flowerType: string) {
            super(_x, _y, _size, _color, _flowerType);
            this.pointColor = _pointColor;
        }

        draw(): void {
            can2.beginPath();
            can2.moveTo(this.x + 0.5, this.y - 15);
            can2.fillStyle = this.color;
            can2.strokeStyle = this.color;
            can2.arc(this.x - 3, this.y - 12, this.size, 0, Math.PI * 2, true);
            can2.arc(this.x - 6, this.y - 16, this.size, 0, Math.PI * 2, true);
            can2.arc(this.x - 3, this.y - 21, this.size, 0, Math.PI * 2, true);
            can2.arc(this.x + 3, this.y - 21, this.size, 0, Math.PI * 2, true);
            can2.arc(this.x + 6, this.y - 17, this.size, 0, Math.PI * 2, true);
            can2.arc(this.x + 4, this.y - 16, this.size, 0, Math.PI * 2, true);
            can2.arc(this.x + 3, this.y - 12, this.size, 0, Math.PI * 2, true);
            can2.stroke();
            can2.fill();
            //Punkt
            can2.beginPath();
            can2.fillStyle = this.pointColor;
            can2.arc(this.x, this.y - 16, 3, 0, Math.PI * 2, true);
            can2.fill();
            can2.closePath();
        }

//        draw(): void {
//            switch (this.flowerType) {
//                case "blume":
//                    this.blume("#F5A9A9", "white", this.x - 25, this.y - 6, 5, "blume");
//                    break;
//            }

//        }
    }
}