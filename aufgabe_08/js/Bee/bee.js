var a08_Canvas;
(function (a08_Canvas) {
    //Bee
    class Bee extends a08_Canvas.Thing {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
            console.log("Hey, I'm Bob!");
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Fl�gel
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            a08_Canvas.can2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            a08_Canvas.can2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            a08_Canvas.can2.fillStyle = "rgba(255,255,255, 0.8)";
            a08_Canvas.can2.fill();
            a08_Canvas.can2.closePath();
            //K�rper der Biene
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x, this.y - this.size / 2);
            a08_Canvas.can2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a08_Canvas.can2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a08_Canvas.can2.fillStyle = this.color;
            a08_Canvas.can2.fill();
            a08_Canvas.can2.closePath();
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x, this.y - this.size / 2);
            a08_Canvas.can2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a08_Canvas.can2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a08_Canvas.can2.strokeStyle = "black";
            a08_Canvas.can2.stroke();
            a08_Canvas.can2.closePath();
            //Kopf
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x - 1, this.y + this.size / 2);
            a08_Canvas.can2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            a08_Canvas.can2.fillStyle = "black";
            a08_Canvas.can2.fill();
            a08_Canvas.can2.closePath();
            //Streifen
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x + 0.25, this.y + this.size / 2);
            a08_Canvas.can2.lineTo(this.x, this.y - this.size / 2);
            a08_Canvas.can2.strokeStyle = "black";
            a08_Canvas.can2.stroke();
            a08_Canvas.can2.closePath();
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x + 2.25, this.y + this.size / 2);
            a08_Canvas.can2.lineTo(this.x + 2.25, this.y - this.size / 2);
            a08_Canvas.can2.strokeStyle = "black";
            a08_Canvas.can2.stroke();
        }
        move() {
            //allgmein
        }
    }
    a08_Canvas.Bee = Bee;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=bee.js.map