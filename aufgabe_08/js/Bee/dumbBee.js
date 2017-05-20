var a08_Canvas;
(function (a08_Canvas) {
    class DumbBee extends a08_Canvas.Bee {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
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
    a08_Canvas.DumbBee = DumbBee;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=dumbBee.js.map