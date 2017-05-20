namespace a08_Canvas {
    export class Hintergrund {
        x: number;
        y: number;
        _width: number;
        _height: number;

        constructor(_x: number, _y: number, _width: number, _height: number) {
            this.x = _x;
            this.y = _y;
            this._width = _width;
            this._height = _height;
        }

        beehive(_x: number, _y: number): void {
            can2.beginPath();
            can2.moveTo(_x, _y);
            can2.bezierCurveTo(_x + 10, _y, _x + 10, _y - 20, _x, _y - 20);
            can2.moveTo(_x, _y);
            can2.bezierCurveTo(_x - 10, _y, _x - 10, _y - 20, _x, _y - 20);
            can2.fillStyle = "#FCC631";
            can2.fill();
            can2.strokeStyle = "black";
            can2.stroke();
            //öffnung
            can2.beginPath();
            can2.moveTo(_x, _y);
            can2.arc(_x - 2.5, _y - 8, 4, 0, Math.PI * 2, true);
            can2.fillStyle = "black";
            can2.fill();
        }

        bigMountain(_x: number, _y: number): void {
            can2.fillStyle = "#A0A0A0";
            can2.beginPath();
            can2.moveTo(_x, _y);
            can2.lineTo(60, 80);
            can2.lineTo(0, 80);
            can2.fill();
        }

        littleMountain(_x: number, _y: number): void {
            can2.fillStyle = "#A0A0A0";
            can2.beginPath();
            can2.moveTo(_x, _y);
            can2.lineTo(50, 80);
            can2.lineTo(130, 80);
            can2.fill();
        }

        house(_x: number, _y: number, _width: number, _height: number): void {
            can2.fillStyle = "white";
            can2.fillRect(_x, _y, _width, _height);
            can2.beginPath();
            can2.fillStyle = "red";
            can2.moveTo(_x, _y);
            can2.lineTo(_x + _width, _y);
            can2.lineTo(_x + _width / 2, _y - _height / 2);
            can2.fill();
            //Tür
            var ombre: any = can2.createLinearGradient(0, -50, 0, 170);
            ombre.addColorStop(0, "black");
            ombre.addColorStop(1, "white");
            can2.fillStyle = ombre;
            can2.fillRect(_x + 16, _y + 25, _width / 3, _height / 2);
            //Fenster Rechts
            var ombreWindowR: any = can2.createLinearGradient(5, -10, 0, 120);
            ombreWindowR.addColorStop(0, "#11bbff");
            ombreWindowR.addColorStop(1, "white");
            can2.fillStyle = ombreWindowR;
            can2.fillRect(_x + 28, _y + 5, _width / 3, _height / 3);
            //Fenster Links
            var ombreWindowL: any = can2.createLinearGradient(5, -10, 0, 120);
            ombreWindowL.addColorStop(0, "#11bbff");
            ombreWindowL.addColorStop(1, "white");
            can2.fillStyle = ombreWindowL;
            can2.fillRect(_x + 5, _y + 5, _width / 3, _height / 3);
        }

        sun(_x: number, _y: number): void {
            can2.fillStyle = "#FCC631";
            can2.beginPath();
            can2.arc(_x, _y, 20, 0, Math.PI * 2, true);
            can2.fill();
        }

        tree(_x: number, _y: number): void {
            can2.fillStyle = "#8B4513 ";
            can2.fillRect(_x, _y, 10, 30);
            for (let a: number = 0; a < 4; a++) {
                switch (a) {
                    case 0:
                        can2.fillStyle = "#5FB404";
                        can2.beginPath();
                        can2.arc(_x - 5, _y - 5, 20, 0, Math.PI * 2, true);
                        can2.fill();
                        break;
                    case 1:
                        can2.fillStyle = "#5FB404";
                        can2.beginPath();
                        can2.arc(_x - 2, _y - 20, 20, 0, Math.PI * 2, true);
                        can2.fill();
                        break;
                    case 2:
                        can2.fillStyle = "#5FB404";
                        can2.beginPath();
                        can2.arc(_x + 10, _y - 20, 20, 0, Math.PI * 2, true);
                        can2.fill();
                        break;
                    case 3:
                        can2.fillStyle = "#5FB404";
                        can2.beginPath();
                        can2.arc(_x + 10, _y - 5, 20, 0, Math.PI * 2, true);
                        can2.fill();
                        break;
                    default:
                        break;
                }
            }
        }
    }
}