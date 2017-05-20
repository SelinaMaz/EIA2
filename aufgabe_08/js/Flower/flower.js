var a08_Canvas;
(function (a08_Canvas) {
    class Flower extends a08_Canvas.Thing {
        constructor(_x, _y, _size, _color, _flowerType) {
            super(_x, _y, _size, _color);
        }
        update() {
            this.draw();
        }
    }
    a08_Canvas.Flower = Flower;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=flower.js.map