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
            let randomtargetflower = Math.round(Math.random() * (a08_Canvas.flower.length - 1));
            this.xTarget = a08_Canvas.flower[randomtargetflower].x;
            this.yTarget = a08_Canvas.flower[randomtargetflower].y;
        }
        setStart() {
            this.x = 348;
            this.y = 61;
        }
        move() {
            let _x = this.xTarget - this.x;
            let _y = this.yTarget - this.y - 15;
            if (Math.abs(_x) < 0.5 && Math.abs(_y) < 0.5)
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