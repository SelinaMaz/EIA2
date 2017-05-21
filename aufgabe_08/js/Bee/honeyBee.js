var a08_Canvas;
(function (a08_Canvas) {
    class HoneyBee extends a08_Canvas.Bee {
        constructor(_x, _y, _size, _color) {
            super(_x, _y, _size, _color);
            this.speed = 0.04;
            this.setStart();
            this.setRandomTarget();
        }
        setRandomTarget() {
            let flower = [];
            let randomtargetflower = Math.round(Math.random() * (flower.length - 1));
            this.xTarget = flower[randomtargetflower].x;
            this.yTarget = flower[randomtargetflower].y;
        }
        setStart() {
            this.x = 348;
            this.y = 61;
        }
        move() {
            let _x = this.xTarget - this.x;
            let _y = this.yTarget - this.y;
            if (Math.abs(_x) < 1 && Math.abs(_y) < 0.5)
                this.setRandomTarget();
            else {
                this.x += _x * this.speed;
                this.y += _y * this.speed;
            }
        }
    }
    a08_Canvas.HoneyBee = HoneyBee;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=honeyBee.js.map