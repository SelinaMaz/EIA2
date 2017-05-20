var a08_Canvas;
(function (a08_Canvas) {
    class Hintergrund {
        constructor(_x, _y, _width, _height) {
            this.x = _x;
            this.y = _y;
            this._width = _width;
            this._height = _height;
        }
        beehive(_x, _y) {
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(_x, _y);
            a08_Canvas.can2.bezierCurveTo(_x + 10, _y, _x + 10, _y - 20, _x, _y - 20);
            a08_Canvas.can2.moveTo(_x, _y);
            a08_Canvas.can2.bezierCurveTo(_x - 10, _y, _x - 10, _y - 20, _x, _y - 20);
            a08_Canvas.can2.fillStyle = "#FCC631";
            a08_Canvas.can2.fill();
            a08_Canvas.can2.strokeStyle = "black";
            a08_Canvas.can2.stroke();
            //�ffnung
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(_x, _y);
            a08_Canvas.can2.arc(_x - 2.5, _y - 8, 4, 0, Math.PI * 2, true);
            a08_Canvas.can2.fillStyle = "black";
            a08_Canvas.can2.fill();
        }
        bigMountain(_x, _y) {
            a08_Canvas.can2.fillStyle = "#A0A0A0";
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(_x, _y);
            a08_Canvas.can2.lineTo(60, 80);
            a08_Canvas.can2.lineTo(0, 80);
            a08_Canvas.can2.fill();
        }
        littleMountain(_x, _y) {
            a08_Canvas.can2.fillStyle = "#A0A0A0";
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.moveTo(_x, _y);
            a08_Canvas.can2.lineTo(50, 80);
            a08_Canvas.can2.lineTo(130, 80);
            a08_Canvas.can2.fill();
        }
        house(_x, _y, _width, _height) {
            a08_Canvas.can2.fillStyle = "white";
            a08_Canvas.can2.fillRect(_x, _y, _width, _height);
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.fillStyle = "red";
            a08_Canvas.can2.moveTo(_x, _y);
            a08_Canvas.can2.lineTo(_x + _width, _y);
            a08_Canvas.can2.lineTo(_x + _width / 2, _y - _height / 2);
            a08_Canvas.can2.fill();
            //T�r
            var ombre = a08_Canvas.can2.createLinearGradient(0, -50, 0, 170);
            ombre.addColorStop(0, "black");
            ombre.addColorStop(1, "white");
            a08_Canvas.can2.fillStyle = ombre;
            a08_Canvas.can2.fillRect(_x + 16, _y + 25, _width / 3, _height / 2);
            //Fenster Rechts
            var ombreWindowR = a08_Canvas.can2.createLinearGradient(5, -10, 0, 120);
            ombreWindowR.addColorStop(0, "#11bbff");
            ombreWindowR.addColorStop(1, "white");
            a08_Canvas.can2.fillStyle = ombreWindowR;
            a08_Canvas.can2.fillRect(_x + 28, _y + 5, _width / 3, _height / 3);
            //Fenster Links
            var ombreWindowL = a08_Canvas.can2.createLinearGradient(5, -10, 0, 120);
            ombreWindowL.addColorStop(0, "#11bbff");
            ombreWindowL.addColorStop(1, "white");
            a08_Canvas.can2.fillStyle = ombreWindowL;
            a08_Canvas.can2.fillRect(_x + 5, _y + 5, _width / 3, _height / 3);
        }
        sun(_x, _y) {
            a08_Canvas.can2.fillStyle = "#FCC631";
            a08_Canvas.can2.beginPath();
            a08_Canvas.can2.arc(_x, _y, 20, 0, Math.PI * 2, true);
            a08_Canvas.can2.fill();
        }
        tree(_x, _y) {
            a08_Canvas.can2.fillStyle = "#8B4513 ";
            a08_Canvas.can2.fillRect(_x, _y, 10, 30);
            for (let a = 0; a < 4; a++) {
                switch (a) {
                    case 0:
                        a08_Canvas.can2.fillStyle = "#5FB404";
                        a08_Canvas.can2.beginPath();
                        a08_Canvas.can2.arc(_x - 5, _y - 5, 20, 0, Math.PI * 2, true);
                        a08_Canvas.can2.fill();
                        break;
                    case 1:
                        a08_Canvas.can2.fillStyle = "#5FB404";
                        a08_Canvas.can2.beginPath();
                        a08_Canvas.can2.arc(_x - 2, _y - 20, 20, 0, Math.PI * 2, true);
                        a08_Canvas.can2.fill();
                        break;
                    case 2:
                        a08_Canvas.can2.fillStyle = "#5FB404";
                        a08_Canvas.can2.beginPath();
                        a08_Canvas.can2.arc(_x + 10, _y - 20, 20, 0, Math.PI * 2, true);
                        a08_Canvas.can2.fill();
                        break;
                    case 3:
                        a08_Canvas.can2.fillStyle = "#5FB404";
                        a08_Canvas.can2.beginPath();
                        a08_Canvas.can2.arc(_x + 10, _y - 5, 20, 0, Math.PI * 2, true);
                        a08_Canvas.can2.fill();
                        break;
                    default:
                        break;
                }
            }
        }
    }
    a08_Canvas.Hintergrund = Hintergrund;
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=hintergrund.js.map