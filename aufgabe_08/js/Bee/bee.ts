namespace a08_Canvas {
    //Bee
    export class Bee extends Thing {
        constructor(_x: number, _y: number, _size: number, _color: string) {
            super(_x, _y, _size, _color);
            console.log("Hey, I'm Bob!");
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
            //allgmein
        }
    }
}