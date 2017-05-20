namespace a08_Canvas {
    export class Thing {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _size: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.color = _color;
            this.draw();
        }

        draw(): void {
            //allgemein
        }
    }
}