/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 17.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace a012 {
    export var c: CanvasRenderingContext2D;
    export var canvas: HTMLCanvasElement;

    export var colorArray: string[] = ["#2FA9E1", "#5D8699", "#35FFD1", "#FF8475", "#CC162F"];
    export var circleArray: Circle[] = [];
    var radius: number;
    var x: number;
    var y: number;
    var dx: number;
    var dy: number;
    var color: string;

    export var maxRadius: number = 40;
    export var minRadius: number = 2;
    export var mouse = { x: 0, y: 0 };

    window.addEventListener("load", init);
    window.addEventListener("mousemove", mouseEvent);

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        c = canvas.getContext("2d");
        console.log(canvas);
        //        var drawCircle: Circle = new Circle(0, 0, 0, 0, 0, "");
        //        drawCircle.draw(100, 100, 4, "blue");
        for (var i: number = 0; i < 100; i++) {
            circleArray.push(new Circle(x, y, dx, dy, radius, color));
        }
        animate();
    }

    function animate(): void {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        for (var i: number = 0; i < circleArray.length; i++) {
            var radius: number = Math.random() * 3 + 1;
            var x: number = Math.random() * (canvas.width - radius * 2) + radius;
            var y: number = Math.random() * (canvas.height - radius * 2) + radius;
            var dx: number = (Math.random() - 0.5);
            var dy: number = (Math.random() - 0.5);
            var color: string = colorArray[Math.floor(Math.random() * colorArray.length)];
            circleArray[i].update(x, y, dx, dy, radius, color);
        }
    }

    function mouseEvent(event: MouseEvent): void {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    }

}