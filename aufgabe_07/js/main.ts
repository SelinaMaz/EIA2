/*
Aufgabe: A06a
Name: Selina Mazzaro
Matrikel: 254068
Datum: 06.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
In Zusammenarbeit mit Jana Burger und Jacqueliene Wagner.*/

namespace a07_Canvas {
    export var can2: CanvasRenderingContext2D;
    var canvas: HTMLCanvasElement;

    let blume: Flower;
    let tulpe: Flower;
    let flower: Flower[] = [];

    let beeData: Bee[] = [];
    let n: number = 10;
    let imgData: ImageData;

    window.addEventListener("load", init);
    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        can2 = canvas.getContext("2d");
        //Wiese
        can2.fillStyle = "#BEF781";
        can2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre: any = can2.createLinearGradient(0, 10, 0, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        can2.fillStyle = ombre;
        can2.fillRect(0, 0, canvas.width, 80);

        bigMountain(30, 10);
        littleMountain(90, 30);
        house(175, 50, 50, 50);
        sun(300, 30);
        tree(350, 80);

        for (var i: number = 0; i < 2; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (280 + 20)) + 0;
            let _y: number = (Math.random() * (280 - 130)) + 130;

            let f: Flower = new Flower(0, 0, 0, "", "", "");

            f.blume("#F5A9A9", "white", _x - 25, _y - 6, 5, ""); //Weis
            f.blume("#FCC631", "#A9D0F5", _x - 10, _y + 5, 6, ""); // Blau
            f.blume("#FCC631", "#F3F781", _x + 10, _y - 5, 4, ""); // Gelb
            f.tulpe(_x + 40, _y - 5, "");
        }
        //Array Blumen
        for (var i: number = 0; i < 6; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (280 + 20)) + 0;
            let _y: number = (Math.random() * (280 - 130)) + 130;
            
            flower.push(new Flower(_x - 25, _y - 6, 5, "#F5A9A9", "white", "blume"));
            flower.push(new Flower(_x - 25, _y - 6, 5, "#FCC631", "#A9D0F5", "blume"));
            flower.push(new Flower(_x - 25, _y - 6, 5, "#FCC631", "#F3F781", "blume"));
            flower.push(new Flower(_x + 40, _y - 5, 0, "", "", "tulpe"));
        }

        beehive(350, 70);
        imgData = can2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            beeData.push(new Bee(348, 61, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);
    }


    //Funktionen 

    function animate(): void {
        can2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < flower.length; i++) {
            let s: Flower = flower[i];
            s.update();
        }
        for (let i: number = 0; i < beeData.length; i++) {
            beeData[i].update();
        }
        window.setTimeout(animate, 20);
    }

    function addBee(): void {
        beeData.push(new Bee(348, 61, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        n++;
    }

    function beehive(_x: number, _y: number): void {
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
}