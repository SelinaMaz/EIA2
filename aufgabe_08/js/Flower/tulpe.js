var a08_Canvas;
(function (a08_Canvas) {
    class Tulpe extends a08_Canvas.Flower {
        constructor(_x, _y, _size, _color, _flowerType) {
            super(_x, _y, _size, _color, _flowerType);
        }
        draw() {
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.fillStyle = "#F78181";
            a08_Canvas.can2.arc(this.x + 8, this.y - 33, 8, 0 * Math.PI, 1 * Math.PI);
            a08_Canvas.can2.closePath();
            a08_Canvas.can2.fill();
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x, this.y - 32);
            a08_Canvas.can2.lineTo(this.x, this.y - 40);
            a08_Canvas.can2.lineTo(this.x + 5, this.y - 32);
            a08_Canvas.can2.lineTo(this.x + 8, this.y - 40);
            a08_Canvas.can2.lineTo(this.x + 11, this.y - 32);
            a08_Canvas.can2.lineTo(this.x + 16, this.y - 40);
            a08_Canvas.can2.lineTo(this.x + 16, this.y - 32);
            a08_Canvas.can2.fill();
        }
    }
    a08_Canvas.Tulpe = Tulpe;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=tulpe.js.map