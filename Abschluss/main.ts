/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 17.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace a012 {
    export var c: CanvasRenderingContext2D;
    export var canvas: HTMLCanvasElement;

    export var maxRadius: number = 40;
    export var minRadius: number = 2;
    export var colorArray: string[] = ["#2FA9E1", "#5D8699", "#35FFD1", "#FF8475", "#CC162F"];
    export var circleArray: Circle[] = [];

    export interface Mouse {
        x: number;
        y: number;
    };

    export var mouseArray: number[] = [];
    export var mouse: Mouse;
    mouse.x = 0;
    mouse.y = 0;

    window.addEventListener("load", init);
    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        c = canvas.getContext("2d");
        console.log(canvas);
        //       new Circle(100, 100, 50, 50, 5, "black");
    }

    for (var i: number = 0; i < 100; i++) {
        var radius: number = Math.random() * 3 + 1;
        var x: number = Math.random() * (canvas.width - radius * 2) + radius;
        var y: number = Math.random() * (canvas.height - radius * 2) + radius;
        var dx: number = (Math.random() - 0.5);
        var dy: number = (Math.random() - 0.5);
        var color: string = colorArray[Math.floor(Math.random() * colorArray.length)];
        circleArray.push(new Circle(x, y, dx, dy, radius, color));
    }

    function animate(): void {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        for (var i: number = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
    }
    animate();

    window.addEventListener("mousemove", function(event): void {
        mouse.x = event.x;
        mouse.y = event.y;
        mouseArray.push(mouse.x);
        mouseArray.push(mouse.y);
        console.log(mouse);
    });

}