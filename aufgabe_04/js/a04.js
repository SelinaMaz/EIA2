var a04_Canvas;
(function (a04_Canvas) {
    let can2;
    let canvas;
    window.addEventListener("load", init);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        can2 = canvas.getContext("2d");
        //Wiese
        can2.fillStyle = "#82FA58";
        can2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        can2.fillStyle = "#81DAF5";
        can2.fillRect(0, 0, canvas.width, 80);
        bigMountain(30, 10);
        littleMountain(90, 30);
        house(175, 50, 50, 50);
        sun(300, 30);
        tree(350, 80);
        //        Geanseblume(100, 200);
    }
    function bigMountain(_x, _y) {
        can2.fillStyle = "#A0A0A0";
        can2.beginPath();
        can2.moveTo(_x, _y);
        can2.lineTo(60, 80);
        can2.lineTo(0, 80);
        can2.fill();
    }
    function littleMountain(_x, _y) {
        can2.fillStyle = "#A0A0A0";
        can2.beginPath();
        can2.moveTo(_x, _y);
        can2.lineTo(50, 80);
        can2.lineTo(130, 80);
        can2.fill();
    }
    function house(_x, _y, width, height) {
        can2.fillStyle = "white";
        can2.fillRect(_x, _y, width, height);
        can2.beginPath();
        can2.fillStyle = "red";
        can2.moveTo(_x, _y);
        can2.lineTo(_x + width, _y);
        can2.lineTo(_x + width / 2, _y - height / 2);
        can2.fill();
        //T�r
        var ombre = can2.createLinearGradient(0, -10, 0, 170);
        ombre.addColorStop(0, "black");
        ombre.addColorStop(1, "white");
        can2.fillStyle = ombre;
        can2.fillRect(_x + 16, _y + 25, width / 3, height / 2);
        //Fenster Rechts
        var ombreWindowR = can2.createLinearGradient(5, -10, 0, 120);
        ombreWindowR.addColorStop(0, "#11bbff");
        ombreWindowR.addColorStop(1, "white");
        can2.fillStyle = ombreWindowR;
        can2.fillRect(_x + 28, _y + 5, width / 3, height / 3);
        //Fenster Links
        var ombreWindowL = can2.createLinearGradient(5, -10, 0, 120);
        ombreWindowL.addColorStop(0, "#11bbff");
        ombreWindowL.addColorStop(1, "white");
        can2.fillStyle = ombreWindowL;
        can2.fillRect(_x + 5, _y + 5, width / 3, height / 3);
    }
    function sun(_x, _y) {
        can2.fillStyle = "yellow";
        can2.beginPath();
        can2.arc(_x, _y, 20, 0, Math.PI * 2, true);
        can2.fill();
    }
    function tree(_x, _y) {
        can2.fillStyle = "#3B170B";
        can2.fillRect(_x, _y, 10, 30);
        for (let a = 0; a < 4; a++) {
            switch (a) {
                case 0:
                    can2.fillStyle = "darkgreen";
                    can2.beginPath();
                    can2.arc(_x - 5, _y - 5, 20, 0, Math.PI * 2, true);
                    can2.fill();
                    break;
                case 1:
                    can2.fillStyle = "darkgreen";
                    can2.beginPath();
                    can2.arc(_x - 2, _y - 20, 20, 0, Math.PI * 2, true);
                    can2.fill();
                    break;
                case 2:
                    can2.fillStyle = "darkgreen";
                    can2.beginPath();
                    can2.arc(_x + 10, _y - 20, 20, 0, Math.PI * 2, true);
                    can2.fill();
                    break;
                case 3:
                    can2.fillStyle = "darkgreen";
                    can2.beginPath();
                    can2.arc(_x + 10, _y - 5, 20, 0, Math.PI * 2, true);
                    can2.fill();
                    break;
                default:
                    break;
            }
        }
    }
})(a04_Canvas || (a04_Canvas = {}));
//namespace L4_Canvas {
//    window.addEventListener("load", init);
//    let crc2: CanvasRenderingContext2D;
//
//    function init(_event: Event): void {
//        console.log("Hallo");
//        let canvas: HTMLCanvasElement;
//        canvas = document.getElementsByTagName("canvas")[0];
//        console.log(canvas);
//
//        crc2 = canvas.getContext("2d");
//        console.log(crc2);
//
//        crc2.fillStyle = "#0000ff";
//        crc2.fillRect(0, 0, canvas.width, canvas.height);
//
//        crc2.moveTo(0, 0);
//        crc2.lineTo(canvas.width, canvas.height);
//        crc2.stroke();
//
//        drawTriangle(200, 150, "#00ff00", "#ff0000");
//    }
//
//    function drawTriangle(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
//        crc2.beginPath();
//        crc2.fillStyle = _fillColor;
//        crc2.strokeStyle = _strokeColor;
//        crc2.moveTo(_x - 10, _y + 10);
//        crc2.lineTo(_x, _y - 10);
//        crc2.lineTo(_x + 10, _y + 10);
//        crc2.closePath();
//        crc2.fill();
//        crc2.stroke();
//        //draw a triangle around the coordinates (_x, _y);
//    }
//}
//# sourceMappingURL=a04.js.map