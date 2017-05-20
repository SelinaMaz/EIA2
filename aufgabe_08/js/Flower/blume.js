var a08_Canvas;
(function (a08_Canvas) {
    class Blume extends a08_Canvas.Flower {
        constructor(_x, _y, _size, _color, _pointColor, _flowerType) {
            super(_x, _y, _size, _color, _flowerType);
            this.pointColor = _pointColor;
        }
        blume(_pointColor, _color, _x, _y, _size, _flowerType) {
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(_x + 0.5, _y - 15);
            a08_Canvas.can2.fillStyle = _color;
            a08_Canvas.can2.strokeStyle = _color;
            a08_Canvas.can2.arc(_x - 3, _y - 12, _size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(_x - 6, _y - 16, _size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(_x - 3, _y - 21, _size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(_x + 3, _y - 21, _size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(_x + 6, _y - 17, _size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(_x + 4, _y - 16, _size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(_x + 3, _y - 12, _size, 0, Math.PI * 2, true);
            a08_Canvas.can2.stroke();
            a08_Canvas.can2.fill();
            //Punkt
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.fillStyle = _pointColor;
            a08_Canvas.can2.arc(_x, _y - 16, 3, 0, Math.PI * 2, true);
            a08_Canvas.can2.fill();
            a08_Canvas.can2.closePath();
        }
        draw() {
            switch (this.flowerType) {
                case "blume":
                    this.blume("#F5A9A9", "white", this.x - 25, this.y - 6, 5, "blume");
                    break;
            }
        }
    }
    a08_Canvas.Blume = Blume;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=blume.js.map