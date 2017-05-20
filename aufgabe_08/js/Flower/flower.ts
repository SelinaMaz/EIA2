namespace a08_Canvas {
    export class Flower extends Thing {
        flowerType: string;

        constructor(_x: number, _y: number, _size: number, _color: string, _flowerType: string) {
            super(_x, _y, _size, _color);
        }
        
        update(): void {
            this.draw();
        }
    }
}
