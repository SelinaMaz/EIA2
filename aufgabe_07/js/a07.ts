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
}


//        draw(): void {
//
//            switch (this.flowerType) {
//                case "rose":
//                    this.drawRose();
//                    break;
//                case "tulpe":
//                    this.drawTulpe();
//                    break;
//            }
