var a07_Canvas;
(function (a07_Canvas) {
    class Flower {
        constructor(_x, _y, _size, _color, _pointColor, _flowerType) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
            this.pointColor = _pointColor;
            this.flowerType = _flowerType;
            this.draw();
        }
        blume(_pointColor, _color, _x, _y, _size, _flowerType) {
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
            _flowerType = "blume";
        }
        tulpe(_x, _y, _flowerType) {
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
            _flowerType = "tulpe";
        }
        draw() {
            switch (this.flowerType) {
                case "blume":
                    this.blume("#F5A9A9", "white", this.x - 25, this.y - 6, 5, "blume");
                    break;
                case "tulpe":
                    this.tulpe(this.x + 40, this.y - 5, "tulpe");
                    break;
            }
        }
        update() {
            this.draw();
        }
    }
    a07_Canvas.Flower = Flower;
})(a07_Canvas || (a07_Canvas = {}));
//# sourceMappingURL=Flower.js.map