namespace a08_Canvas {

    export class HoneyBee extends Bee {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            super(_x, _y, _size, _color);
            this.speed = 0.04;
            this.setStart();
            this.setRandomTarget();
        }

        setRandomTarget(): void {
            let randomtargetflower: number = Math.round(Math.random() * (flower.length - 1));
            this.xTarget = flower[randomtargetflower].x;
            this.yTarget = flower[randomtargetflower].y;
        }

        setStart(): void {
            this.x = 348;
            this.y = 61;
        }

        move(): void {
            let _x: number = this.xTarget - this.x;
            let _y: number = this.yTarget - this.y - 15;
            if (Math.abs(_x) < 0.5 && Math.abs(_y) < 0.5)
                this.setRandomTarget();
            else {
                this.x += _x * this.speed;
                this.y += _y * this.speed;
            }
        }
    }
}