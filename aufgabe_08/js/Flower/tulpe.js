var a08_Canvas;
(function (a08_Canvas) {
    class Tulpe extends a08_Canvas.Flower {
        constructor(_x, _y, _size, _color, _flowerType) {
            super(_x, _y, _size, _color, _flowerType);
        }
        tulpe(_x, _y, _flowerType) {
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.fillStyle = "#F78181";
            a08_Canvas.can2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            a08_Canvas.can2.closePath();
            a08_Canvas.can2.fill();
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(_x, _y - 32);
            a08_Canvas.can2.lineTo(_x, _y - 40);
            a08_Canvas.can2.lineTo(_x + 5, _y - 32);
            a08_Canvas.can2.lineTo(_x + 8, _y - 40);
            a08_Canvas.can2.lineTo(_x + 11, _y - 32);
            a08_Canvas.can2.lineTo(_x + 16, _y - 40);
            a08_Canvas.can2.lineTo(_x + 16, _y - 32);
            a08_Canvas.can2.fill();
        }
        draw() {
            switch (this.flowerType) {
                case "tulpe":
                    this.tulpe(this.x + 40, this.y - 5, "tulpe");
                    break;
            }
        }
    }
    a08_Canvas.Tulpe = Tulpe;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=tulpe.js.map