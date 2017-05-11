namespace a07_Canvas {
    export class Bee {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            //Flügel
            can2.beginPath();
            can2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            can2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            can2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            can2.fillStyle = "rgba(255,255,255, 0.8)";
            can2.fill();
            can2.closePath();
            //Körper der Biene
            can2.beginPath();
            can2.moveTo(this.x, this.y - this.size / 2);
            can2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            can2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            can2.fillStyle = this.color;
            can2.fill();
            can2.closePath();
            can2.beginPath();
            can2.moveTo(this.x, this.y - this.size / 2);
            can2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            can2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            can2.strokeStyle = "black";
            can2.stroke();
            can2.closePath();
            //Kopf
            can2.beginPath();
            can2.moveTo(this.x - 1, this.y + this.size / 2);
            can2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            can2.fillStyle = "black";
            can2.fill();
            can2.closePath();
            //Streifen
            can2.beginPath();
            can2.moveTo(this.x + 0.25, this.y + this.size / 2);
            can2.lineTo(this.x, this.y - this.size / 2);
            can2.strokeStyle = "black";
            can2.stroke();
            can2.closePath();
            can2.beginPath();
            can2.moveTo(this.x + 2.25, this.y + this.size / 2);
            can2.lineTo(this.x + 2.25, this.y - this.size / 2);
            can2.strokeStyle = "black";
            can2.stroke();
        }

        move(): void {
            this.x += Math.random() * 5 - 3;
            this.y += Math.random() * 4 - 2;

            if (this.x < 0) {
                this.x = 400;
            }
            if (this.y < 0) {
                this.y = 300;
            }
            if (this.y > 300) {
                this.y = 0;
            }
        }

        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }

    export class Flower {
        x: number;
        y: number;
        size: number;
        color: string;
        pointColor: string;
        flowerType: number;

        constructor(_x: number, _y: number, _size: number, _color: string, _pointColor: string, _flowerType: number) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
            this.pointColor = _pointColor;
            this.flowerType = _flowerType;
        }


        blume(_pointColor: string, _color: string, _x: number, _y: number, _size: number): void {
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

        tulpe(_x: number, _y: number): void {
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
                case 1:
                    this.blume("#F5A9A9", "white", this.x - 25, this.y - 6, 5);
                    break;
                case 2:
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }
           
        }

        update(): void {
            this.draw();
        }
    }
}

