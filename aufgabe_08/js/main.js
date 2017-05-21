/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 20.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
In Zusammenarbeit mit Jana Burger und Jacqueliene Wagner.*/
var a08_Canvas;
(function (a08_Canvas) {
    var canvas;
    a08_Canvas.flower = [];
    a08_Canvas.beeData = [];
    let n = 10;
    let imgData;
    window.addEventListener("load", init);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        a08_Canvas.can2 = canvas.getContext("2d");
        //Wiese
        a08_Canvas.can2.fillStyle = "#BEF781";
        a08_Canvas.can2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        var ombre = a08_Canvas.can2.createLinearGradient(0, 10, 0, 100);
        ombre.addColorStop(0, "#A9D0F5");
        ombre.addColorStop(1, "white");
        a08_Canvas.can2.fillStyle = ombre;
        a08_Canvas.can2.fillRect(0, 0, canvas.width, 80);
        let h = new a08_Canvas.Hintergrund(0, 0, 0, 0);
        h.bigMountain(30, 10);
        h.littleMountain(90, 30);
        h.house(175, 50, 50, 50);
        h.sun(300, 30);
        h.tree(350, 80);
        h.beehive(350, 70);
        imgData = a08_Canvas.can2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 5; i++) {
            a08_Canvas.beeData.push(new a08_Canvas.DumbBee(348, 61, Math.random() * 10 + 5, "blue" /*"hsl(" + Math.random() * 180 + ", 80%, 50%)"*/));
            a08_Canvas.beeData.push(new a08_Canvas.HoneyBee(348, 61, 10, "#FCC631"));
        }
        window.setTimeout(animate, 30);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("push", addBee);
        for (var i = 0; i < 2; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (280 + 20)) + 0;
            let _y = (Math.random() * (280 - 130)) + 130;
            let blumeWeis = new a08_Canvas.Blume(_x - 25, _y - 6, 5, "white", "#F5A9A9", ""); // Weis
            let blumeBlau = new a08_Canvas.Blume(_x - 25, _y - 6, 5, "#A9D0F5", "#FCC631", ""); // Blau
            let blumeGelb = new a08_Canvas.Blume(_x - 25, _y - 6, 5, "#F3F781", "#FCC631", ""); // Gelb
            let tulpe = new a08_Canvas.Tulpe(_x - 25, _y - 6, 0, "", ""); //Tulpe
            blumeWeis.draw();
            blumeBlau.draw();
            blumeGelb.draw();
            tulpe.draw();
        }
        //Array Blumen
        for (var i = 0; i < 6; i++) {
            let randomFlower = Math.floor((Math.random() * 3) + 0);
            let _x = (Math.random() * (280 + 20)) + 0;
            let _y = (Math.random() * (280 - 130)) + 130;
            a08_Canvas.flower.push(new a08_Canvas.Blume(_x - 25, _y - 6, 5, "#F5A9A9", "white", "blume"));
            a08_Canvas.flower.push(new a08_Canvas.Blume(_x - 25, _y - 6, 5, "#FCC631", "#A9D0F5", "blume"));
            a08_Canvas.flower.push(new a08_Canvas.Blume(_x - 25, _y - 6, 5, "#FCC631", "#F3F781", "blume"));
            a08_Canvas.flower.push(new a08_Canvas.Tulpe(_x + 40, _y - 5, 0, "", "tulpe"));
            console.log(a08_Canvas.flower);
        }
    }
    //Funktionen 
    function animate() {
        a08_Canvas.can2.putImageData(imgData, 0, 0);
        for (let i = 0; i < a08_Canvas.flower.length; i++) {
            let f = a08_Canvas.flower[i];
            f.update();
        }
        for (let i = 0; i < a08_Canvas.beeData.length; i++) {
            a08_Canvas.beeData[i].update();
        }
        window.setTimeout(animate, 20);
    }
    function addBee() {
        a08_Canvas.beeData.push(new a08_Canvas.DumbBee(348, 61, Math.random() * 10 + 5, "blue" /*"hsl(" + Math.random() * 180 + ", 80%, 50%)"*/));
        a08_Canvas.beeData.push(new a08_Canvas.HoneyBee(348, 61, Math.random() * 10 + 5, "#FCC631"));
        n++;
    }
})(a08_Canvas || (a08_Canvas = {}));
//# sourceMappingURL=main.js.map