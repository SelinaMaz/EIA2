var a08_Canvas;
(function (a08_Canvas) {
    class Thing {
        constructor(_x, _y, _size, _color) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
            this.draw();
        }
        draw() {
            //allgemein
        }
    }
    a08_Canvas.Thing = Thing;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=thing.js.map