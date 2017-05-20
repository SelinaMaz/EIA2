/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 20.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
In Zusammenarbeit mit Jana Burger und Jacqueliene Wagner.*/

namespace a08_Canvas {
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

        let h: Hintergrund = new Hintergrund(0, 0, 0, 0);
        h.bigMountain(30, 10);
        h.littleMountain(90, 30);
        h.house(175, 50, 50, 50);
        h.sun(300, 30);
        h.tree(350, 80);

        h.beehive(350, 70);
        imgData = can2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            beeData.push(new Bee(348, 61, Math.random() * 10 + 5, "hsl(" + Math.random() * 180 + ", 80%, 50%)"));
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);

        for (var i: number = 0; i < 2; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (280 + 20)) + 0;
            let _y: number = (Math.random() * (280 - 130)) + 130;

            let blumeWeis: Flower = new Blume(_x - 25, _y - 6, 5, "white", "#F5A9A9", ""); // Weis
            let blumeBlau: Flower = new Blume(_x - 25, _y - 6, 5, "#A9D0F5", "#FCC631", ""); // Blau
            let blumeGelb: Flower = new Blume(_x - 25, _y - 6, 5, "#F3F781", "#FCC631", ""); // Gelb
            let tulpe: Flower = new Tulpe(_x - 25, _y - 6, 0, "", ""); //Tuple

            blumeWeis.draw();
            blumeBlau.draw();
            blumeGelb.draw();
            tulpe.draw();
        }

        //Array Blumen
        for (var i: number = 0; i < 6; i++) {
            let randomFlower: number = Math.floor((Math.random() * 3) + 0);
            let _x: number = (Math.random() * (280 + 20)) + 0;
            let _y: number = (Math.random() * (280 - 130)) + 130;

            flower.push(new Blume(_x - 25, _y - 6, 5, "#F5A9A9", "white", "blume"));
            flower.push(new Blume(_x - 25, _y - 6, 5, "#FCC631", "#A9D0F5", "blume"));
            flower.push(new Blume(_x - 25, _y - 6, 5, "#FCC631", "#F3F781", "blume"));
            flower.push(new Tulpe(_x + 40, _y - 5, 0, "", "tulpe"));
        }
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
}