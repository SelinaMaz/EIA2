/*
Aufgabe: A03a
Name: Selina Mazzaro
Matrikel: 254068
Datum: 29.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
In Zusammenarbeit mit Jana Burger und Jacqueliene Wagner.*/
var a05_Canvas;
(function (a05_Canvas) {
    var can2;
    var canvas;
    let x = [];
    let y = [];
    let n = 10;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        can2 = canvas.getContext("2d");
        //Wiese
        can2.fillStyle = "#BEF781";
        can2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre = can2.createLinearGradient(0, 10, 0, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        can2.fillStyle = ombre;
        can2.fillRect(0, 0, canvas.width, 80);
        bigMountain(30, 10);
        littleMountain(90, 30);
        house(175, 50, 50, 50);
        sun(300, 30);
        tree(350, 80);
        for (var i = 0; i < 8; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (280 + 20)) + 0;
            let _y = (Math.random() * (280 - 130)) + 130;
            blume("#F5A9A9", "white", _x - 25, _y - 6, 5); //Weis
            blume("#FCC631", "#A9D0F5", _x - 10, _y + 5, 6); // Blau
            blume("#FCC631", "#F3F781", _x + 10, _y - 5, 4); // Gelb
            tulpe(_x + 40, _y - 5);
        }
        /**************************************************************************************************************************
        *Aufgabe 5
        **************************************************************************************************************************/
        beehive(350, 70);
        imgData = can2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < n; i++) {
            x[i] = 350; //Koordinaten von Bienenkorb
            y[i] = 60;
            drawBee(x[i], y[i]); //Start der Biene
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);
    }
    //Funktionen 
    function animate() {
        can2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            x[i] += Math.random() * 5 - 3;
            y[i] += Math.random() * 4 - 2;
            if (x[i] < 0) {
                x[i] = 400;
            }
            if (y[i] < 0) {
                y[i] = 300;
            }
            if (y[i] > 300) {
                y[i] = 0;
            }
            drawBee(x[i], y[i] + 8);
        }
        window.setTimeout(animate, 20);
    }
    function drawBee(_x, _y) {
        //Fl�gel
        can2.beginPath();
        can2.moveTo(_x + 3, _y - 3 - 3 / 2);
        can2.bezierCurveTo(_x + 3 + 10 / 2, _y - 3 - 3 / 2, _x + 3 + 10 / 2, _y - 3 + 3 / 2, _x + 3, _y - 3 + 3 / 2);
        can2.bezierCurveTo(_x + 3 - 10 / 2, _y - 3 + 3 / 2, _x + 3 - 10 / 2, _y - 3 - 3 / 2, _x + 3, _y - 3 - 5 / 2);
        can2.fillStyle = "rgba(255,255,255, 0.8)";
        can2.fill();
        can2.closePath();
        //K�rper der Biene
        can2.beginPath();
        can2.moveTo(_x, _y - 5 / 2);
        can2.bezierCurveTo(_x + 10 / 2, _y - 5 / 2, _x + 10 / 2, _y + 5 / 2, _x, _y + 5 / 2);
        can2.bezierCurveTo(_x - 10 / 2, _y + 5 / 2, _x - 10 / 2, _y - 5 / 2, _x, _y - 5 / 2);
        can2.fillStyle = "#FCC631";
        can2.fill();
        can2.closePath();
        can2.beginPath();
        can2.moveTo(_x, _y - 5 / 2);
        can2.bezierCurveTo(_x + 10 / 2, _y - 5 / 2, _x + 10 / 2, _y + 5 / 2, _x, _y + 5 / 2);
        can2.bezierCurveTo(_x - 10 / 2, _y + 5 / 2, _x - 10 / 2, _y - 5 / 2, _x, _y - 5 / 2);
        can2.strokeStyle = "black";
        can2.stroke();
        can2.closePath();
        //Kopf
        can2.beginPath();
        can2.moveTo(_x - 1, _y + 5 / 2);
        can2.bezierCurveTo(_x - 5, _y, _x - 5, _y - 5 / 2, _x - 1, _y - 5 / 2);
        can2.fillStyle = "black";
        can2.fill();
        can2.closePath();
        //Streifen
        can2.beginPath();
        can2.moveTo(_x + 0.25, _y + 5 / 2);
        can2.lineTo(_x, _y - 5 / 2);
        can2.strokeStyle = "black";
        can2.stroke();
        can2.closePath();
        can2.beginPath();
        can2.moveTo(_x + 2.25, _y + 5 / 2);
        can2.lineTo(_x + 2.25, _y - 5 / 2);
        can2.strokeStyle = "black";
        can2.stroke();
    }
    function addBee() {
        x.push(350);
        y.push(50);
        n++;
    }
    function beehive(_x, _y) {
        can2.beginPath();
        can2.moveTo(_x, _y);
        can2.bezierCurveTo(_x + 10, _y, _x + 10, _y - 20, _x, _y - 20);
        can2.moveTo(_x, _y);
        can2.bezierCurveTo(_x - 10, _y, _x - 10, _y - 20, _x, _y - 20);
        can2.fillStyle = "#FCC631";
        can2.fill();
        can2.strokeStyle = "black";
        can2.stroke();
        //�ffnung
        can2.beginPath();
        can2.moveTo(_x, _y);
        can2.arc(_x - 2.5, _y - 8, 4, 0, Math.PI * 2, true);
        can2.fillStyle = "black";
        can2.fill();
    }
    /********************************************************************************************************
    *Aufgabe 4
    **********************************************************************************************************/
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
        var ombre = can2.createLinearGradient(0, -50, 0, 170);
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
        can2.fillStyle = "#FCC631";
        can2.beginPath();
        can2.arc(_x, _y, 20, 0, Math.PI * 2, true);
        can2.fill();
    }
    function tree(_x, _y) {
        can2.fillStyle = "#8B4513 ";
        can2.fillRect(_x, _y, 10, 30);
        for (let a = 0; a < 4; a++) {
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
    function blume(_pointColor, _color, _x, _y, _size) {
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
    function tulpe(_x, _y) {
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
})(a05_Canvas || (a05_Canvas = {}));
//# sourceMappingURL=a05.js.map