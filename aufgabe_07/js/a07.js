var a07_Canvas;
(function (a07_Canvas) {
    class Bee {
        constructor(_x, _y, _size, _color) {
            console.log("Hey, I'm Bob!");
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Fl�gel
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(this.x + 3, this.y - this.size / 2 - 3 - 3 / 2);
            a07_Canvas.can2.bezierCurveTo(this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3 + 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3, this.y - 3 + 3 / 2);
            a07_Canvas.can2.bezierCurveTo(this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 + 3 / 2, this.x + 3 - 10 / 2, this.y - this.size / 2 - 3 - 3 / 2, this.x + 3, this.y - 3 - 5 / 2);
            a07_Canvas.can2.fillStyle = "rgba(255,255,255, 0.8)";
            a07_Canvas.can2.fill();
            a07_Canvas.can2.closePath();
            //K�rper der Biene
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(this.x, this.y - this.size / 2);
            a07_Canvas.can2.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a07_Canvas.can2.bezierCurveTo(this.x - this.size, this.y + this.size / 2, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a07_Canvas.can2.fillStyle = this.color;
            a07_Canvas.can2.fill();
            a07_Canvas.can2.closePath();
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(this.x, this.y - this.size / 2);
            a07_Canvas.can2.bezierCurveTo(this.x + this.size, this.y - this.size / 4, this.x + this.size / 2, this.y + this.size / 2, this.x, this.y + this.size / 2);
            a07_Canvas.can2.bezierCurveTo(this.x - this.size, this.y + this.size / 4, this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2);
            a07_Canvas.can2.strokeStyle = "black";
            a07_Canvas.can2.stroke();
            a07_Canvas.can2.closePath();
            //Kopf
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(this.x - 1, this.y + this.size / 2);
            a07_Canvas.can2.bezierCurveTo(this.x - this.size, this.y, this.x - 5, this.y - this.size / 2, this.x - 1, this.y - this.size / 2);
            a07_Canvas.can2.fillStyle = "black";
            a07_Canvas.can2.fill();
            a07_Canvas.can2.closePath();
            //Streifen
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(this.x + 0.25, this.y + this.size / 2);
            a07_Canvas.can2.lineTo(this.x, this.y - this.size / 2);
            a07_Canvas.can2.strokeStyle = "black";
            a07_Canvas.can2.stroke();
            a07_Canvas.can2.closePath();
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(this.x + 2.25, this.y + this.size / 2);
            a07_Canvas.can2.lineTo(this.x + 2.25, this.y - this.size / 2);
            a07_Canvas.can2.strokeStyle = "black";
            a07_Canvas.can2.stroke();
        }
        move() {
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
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    a07_Canvas.Bee = Bee;
    class Flower {
        constructor(_x, _y, _size, _color, _pointColor, _flowerType) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
            this.pointColor = _pointColor;
            this.flowerType = _flowerType;
        }
        blume(_pointColor, _color, _x, _y, _size) {
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(_x + 0.5, _y - 15);
            a07_Canvas.can2.fillStyle = _color;
            a07_Canvas.can2.strokeStyle = _color;
            a07_Canvas.can2.arc(_x - 3, _y - 12, _size, 0, Math.PI * 2, true);
            a07_Canvas.can2.arc(_x - 6, _y - 16, _size, 0, Math.PI * 2, true);
            a07_Canvas.can2.arc(_x - 3, _y - 21, _size, 0, Math.PI * 2, true);
            a07_Canvas.can2.arc(_x + 3, _y - 21, _size, 0, Math.PI * 2, true);
            a07_Canvas.can2.arc(_x + 6, _y - 17, _size, 0, Math.PI * 2, true);
            a07_Canvas.can2.arc(_x + 4, _y - 16, _size, 0, Math.PI * 2, true);
            a07_Canvas.can2.arc(_x + 3, _y - 12, _size, 0, Math.PI * 2, true);
            a07_Canvas.can2.stroke();
            a07_Canvas.can2.fill();
            //Punkt
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.fillStyle = _pointColor;
            a07_Canvas.can2.arc(_x, _y - 16, 3, 0, Math.PI * 2, true);
            a07_Canvas.can2.fill();
            a07_Canvas.can2.closePath();
        }
        tulpe(_x, _y) {
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.fillStyle = "#F78181";
            a07_Canvas.can2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            a07_Canvas.can2.closePath();
            a07_Canvas.can2.fill();
            a07_Canvas.can2.beginPath();
            a07_Canvas.can2.moveTo(_x, _y - 32);
            a07_Canvas.can2.lineTo(_x, _y - 40);
            a07_Canvas.can2.lineTo(_x + 5, _y - 32);
            a07_Canvas.can2.lineTo(_x + 8, _y - 40);
            a07_Canvas.can2.lineTo(_x + 11, _y - 32);
            a07_Canvas.can2.lineTo(_x + 16, _y - 40);
            a07_Canvas.can2.lineTo(_x + 16, _y - 32);
            a07_Canvas.can2.fill();
        }
        draw() {
            switch (this.flowerType) {
                case 1:
                    this.blume("#F5A9A9", "white", this.x - 25, this.y - 6, 5);
                    break;
                case 2:
                    this.tulpe(this.x + 40, this.y - 5);
                    break;
            }
        }
        update() {
            this.draw();
        }
    }
    a07_Canvas.Flower = Flower;
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=a07.js.map