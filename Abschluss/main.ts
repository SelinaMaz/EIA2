/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 19.07.17
    
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
    export var maxRadius: number = 10;
    export var minRadius: number = 1;
    export var mouse = { x: 0, y: 0 };

    window.addEventListener("load", init);
    window.addEventListener("mousemove", mouseEvent);

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        c = canvas.getContext("2d");
        console.log(canvas);
        for (var i: number = 0; i < 80; i++) {
            var radius: number = Math.random() * 3 + 1;
            var x: number = Math.random() * (canvas.width - radius * 2) + radius;
            var y: number = Math.random() * (canvas.height - radius * 2) + radius;
            var dx: number = (Math.random() - 0.5);
            var dy: number = (Math.random() - 0.5);
            circleArray.push(new Circle(x, y, dx, dy, radius, "#30363B"));
        }
        animate();
        canvas.addEventListener("click", addGlowCircle);
        canvas.addEventListener("mouseout", pauseMusik);
        canvas.addEventListener("mouseover", playMusik);
    }
    
    //Animation und Interaktion
    function animate(): void {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);
        for (var i: number = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
        createText("Turn on the Sound", 20);
    }

    function mouseEvent(event: MouseEvent): void {
        mouse.x = parseInt((event.x - 180) + "px");
        mouse.y = parseInt((event.y - 150) + "px");
        //        console.log(mouse);
    }

    //Text
    function createText(t: string, size: number): void {
        c.font = size + ("px 'Dosis', sans-serif");
        c.textAlign = "center";
        c.fillStyle = "white";
        c.fillText(t, canvas.width / 2, canvas.height / 2);
        c.fillRect(canvas.width / 3, (canvas.height / 2) + 5, canvas.width / 3, 1);
    }

    
    //GlowCircle
    function addGlowCircle(): void {
        var x: number = Math.random() * (canvas.width - radius * 2) + radius;
        var y: number = Math.random() * (canvas.height - radius * 2) + radius;
        var dx: number = (Math.random() - 0.5);
        var dy: number = (Math.random() - 0.5);

        circleArray.push(new GlowCircle(x, y, dx, dy, 2, "white"));
        console.log("Hi");
    }
    
    //Musik
    var mySound: HTMLAudioElement = new Audio("Cheerleader.mp3");
    function playMusik(_event: Event): void {
        console.log("Musik an");
        mySound.play();
        mySound.loop = true;
        console.log(_event);
    }

    function pauseMusik(_event: Event): void {
        mySound.pause();
        console.log(_event);
    }
}