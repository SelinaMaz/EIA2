namespace a04_Canvas {
    var can2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;

    window.addEventListener("load", init);
    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        can2 = canvas.getContext("2d");
        //Wiese
        can2.fillStyle = "#BEF781";
        can2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        can2.fillStyle = "#81DAF5";
        can2.fillRect(0, 0, canvas.width, 80);

        bigMountain(30, 10);
        littleMountain(90, 30);
        house(175, 50, 50, 50);
        sun(300, 30);
        tree(350, 80);

        for (var i: number = 0; i < 8; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (280 + 20)) + 0;
            let _y: number = (Math.random() * (280 - 130)) + 130;

            blume("#F5A9A9", "white", _x - 25, _y - 6, 5); //Weis
            blume("#FCC631", "#A9D0F5", _x - 10 , _y + 5, 6); // Blau
            blume("#FCC631", "#F3F781", _x + 10, _y - 5, 4); // Gelb
            tulpe(_x + 40, _y - 5);
        }
        createKleeblatt(380, 120);
        createKleeblatt(361, 115);
        createKleeblatt(361, 150);
        createKleeblatt(380, 140);
        createKleeblatt(348, 140);
    }

    //Funktionen

//    function copyImage() {
//        var imgData = can2.getImageData(0, 0, canvas.width, canvas.height);
//        can2.putImageData(imgData, 0, 0);
//    }
    
    function bigMountain(_x: number, _y: number): void {
        can2.fillStyle = "#A0A0A0";
        can2.beginPath();
        can2.moveTo(_x, _y);
        can2.lineTo(60, 80);
        can2.lineTo(0, 80);
        can2.fill();
    }

    function littleMountain(_x: number, _y: number): void {
        can2.fillStyle = "#A0A0A0";
        can2.beginPath();
        can2.moveTo(_x, _y);
        can2.lineTo(50, 80);
        can2.lineTo(130, 80);
        can2.fill();
    }

    function house(_x: number, _y: number, width: number, height: number): void {
        can2.fillStyle = "white";
        can2.fillRect(_x, _y, width, height);
        can2.beginPath();
        can2.fillStyle = "red";
        can2.moveTo(_x, _y);
        can2.lineTo(_x + width, _y);
        can2.lineTo(_x + width / 2, _y - height / 2);
        can2.fill();
        //Tür
        var ombre: any = can2.createLinearGradient(0, -50, 0, 170);
        ombre.addColorStop(0, "black");
        ombre.addColorStop(1, "white");
        can2.fillStyle = ombre;
        can2.fillRect(_x + 16, _y + 25, width / 3, height / 2);
        //Fenster Rechts
        var ombreWindowR: any = can2.createLinearGradient(5, -10, 0, 120);
        ombreWindowR.addColorStop(0, "#11bbff");
        ombreWindowR.addColorStop(1, "white");
        can2.fillStyle = ombreWindowR;
        can2.fillRect(_x + 28, _y + 5, width / 3, height / 3);
        //Fenster Links
        var ombreWindowL: any = can2.createLinearGradient(5, -10, 0, 120);
        ombreWindowL.addColorStop(0, "#11bbff");
        ombreWindowL.addColorStop(1, "white");
        can2.fillStyle = ombreWindowL;
        can2.fillRect(_x + 5, _y + 5, width / 3, height / 3);
    }

    function sun(_x: number, _y: number): void {
        can2.fillStyle = "#FCC631";
        can2.beginPath();
        can2.arc(_x, _y, 20, 0, Math.PI * 2, true);
        can2.fill();
    }

    function tree(_x: number, _y: number): void {
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

    function blume(_pointColor: string, _color: string, _x: number, _y: number, _size: number): void {
        can2.beginPath();
        can2.moveTo(_x + 0.5, _y - 15);
        can2.fillStyle = _color;
        can2.strokeStyle = _color;
        can2.arc(_x - 3, _y - 12, _size, 0, Math.PI * 2, true);
        can2.arc(_x - 6, _y - 16, _size, 0, Math.PI * 2, true);
        can2.arc(_x - 3, _y - 21, _size, 0, Math.PI * 2, true);
        can2.arc(_x + 3, _y - 21, _size, 0, Math.PI * 2, true);
        can2.arc(_x + 6, _y - 17, _size, 0, Math.PI * 2, true);
        can2.arc(_x + 4, _y - 16, _size, 0, Math.PI * 2, true);
        can2.arc(_x + 3, _y - 12, _size, 0, Math.PI * 2, true);
        can2.stroke();
        can2.fill();
        //Punkt
        can2.beginPath();
        can2.fillStyle = _pointColor;
        can2.arc(_x, _y - 16, 3, 0, Math.PI * 2, true);
        can2.fill();
        can2.closePath();

    }

    function tulpe(_x: number, _y: number): void {
        can2.beginPath();
        can2.fillStyle = "#F78181";
        can2.arc(_x + 8, _y - 33, 8, 0 * Math.PI, 1 * Math.PI);
        can2.closePath();
        can2.fill();
        can2.beginPath();
        can2.moveTo(_x, _y - 32);
        can2.lineTo(_x, _y - 40);
        can2.lineTo(_x + 5, _y - 32);
        can2.lineTo(_x + 8, _y - 40);
        can2.lineTo(_x + 11, _y - 32);
        can2.lineTo(_x + 16, _y - 40);
        can2.lineTo(_x + 16, _y - 32);
        can2.fill();
    }

    function kleeblatt(_x: number, _y: number): void {
        can2.scale(0.05, 0.05);
        can2.beginPath();
        can2.moveTo(_x, _y);
        can2.bezierCurveTo(75, 37, 70, 25, 50, 25); // (x, y, radius, startWinkel, endWinkel, uhrzeigersinn)
        can2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        can2.bezierCurveTo(20, 80, 40, 102, 75, 120);
        can2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        can2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        can2.bezierCurveTo(85, 25, 75, 37, 75, 40);
        can2.fillStyle = "#5FB404";
        can2.fill();
    }

    function createKleeblatt(_x: number, _y: number): void {
        for (let a: number = 0; a < 4; a++) {
            switch (a) {
                case 0:
                    can2.setTransform(1, 0, 0, 1, 0, 0);
                    can2.translate(_x, _y);
                    kleeblatt(_x, _y);
                    break;
                case 1:
                    can2.setTransform(1, 0, 0, 1, 0, 0);
                    can2.translate(_x + 10, _y + 5);
                    can2.rotate((1 * Math.PI / 1.5));
                    kleeblatt(_x, _y);
                    break;
                case 2:
                    break;
                case 3:
                    can2.setTransform(1, 0, 0, 1, 0, 0);
                    can2.translate(_x - 1, _y + 11);
                    can2.rotate((1 * Math.PI / 0.7));
                    kleeblatt(_x, _y);
                    break;
                default:
                    break;
            }
        }
    }
}



