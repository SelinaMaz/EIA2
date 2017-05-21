var a08_Canvas;
(function (a08_Canvas) {
    class Blume extends a08_Canvas.Flower {
        constructor(_x, _y, _size, _color, _pointColor, _flowerType) {
            super(_x, _y, _size, _color, _flowerType);
            this.pointColor = _pointColor;
        }
        draw() {
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(this.x + 0.5, this.y - 15);
            a08_Canvas.can2.fillStyle = this.color;
            a08_Canvas.can2.strokeStyle = this.color;
            a08_Canvas.can2.arc(this.x - 3, this.y - 12, this.size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(this.x - 6, this.y - 16, this.size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(this.x - 3, this.y - 21, this.size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(this.x + 3, this.y - 21, this.size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(this.x + 6, this.y - 17, this.size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(this.x + 4, this.y - 16, this.size, 0, Math.PI * 2, true);
            a08_Canvas.can2.arc(this.x + 3, this.y - 12, this.size, 0, Math.PI * 2, true);
            a08_Canvas.can2.stroke();
            a08_Canvas.can2.fill();
            //Punkt
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.fillStyle = this.pointColor;
            a08_Canvas.can2.arc(this.x, this.y - 16, 3, 0, Math.PI * 2, true);
            a08_Canvas.can2.fill();
            a08_Canvas.can2.closePath();
        }
    }
    a08_Canvas.Blume = Blume;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=blume.js.map