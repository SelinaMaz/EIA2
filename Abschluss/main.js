/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var a012;
(function (a012) {
    a012.colorArray = ["#2FA9E1", "#5D8699", "#35FFD1", "#FF8475", "#CC162F"];
    a012.circleArray = [];
    a012.glowCircle = [];
    var radius;
    var x;
    var y;
    var dx;
    var dy;
    var color;
    a012.maxRadius = 10;
    a012.minRadius = 1;
    a012.mouse = { x: 0, y: 0 };
    window.addEventListener("load", init);
    window.addEventListener("mousemove", mouseEvent);
    function init(_event) {
        a012.canvas = document.getElementsByTagName("canvas")[0];
        a012.c = a012.canvas.getContext("2d");
        console.log(a012.canvas);
        for (var i = 0; i < 80; i++) {
            var radius = Math.random() * 3 + 1;
            var x = Math.random() * (a012.canvas.width - radius * 2) + radius;
            var y = Math.random() * (a012.canvas.height - radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            a012.circleArray.push(new a012.Circle(x, y, dx, dy, radius, "#30363B"));
        }
        animate();
        a012.canvas.addEventListener("click", addGlowCircle);
        a012.canvas.addEventListener("mouseout", pauseMusik);
        a012.canvas.addEventListener("mouseover", playMusik);
    }
    //Animation und Interaktion
    function animate() {
        requestAnimationFrame(animate);
        a012.c.clearRect(0, 0, a012.canvas.width, a012.canvas.height);
        for (var i = 0; i < a012.circleArray.length; i++) {
            a012.circleArray[i].update();
        }
        for (var i = 0; i < a012.glowCircle.length; i++) {
            a012.glowCircle[i].update();
        }
        createText("Turn on the Sound", 20);
    }
    function mouseEvent(event) {
        a012.mouse.x = parseInt((event.x - 180) + "px");
        a012.mouse.y = parseInt((event.y - 150) + "px");
        //        console.log(mouse);
    }
    //Text
    function createText(t, size) {
        a012.c.font = size + ("px 'Dosis', sans-serif");
        a012.c.textAlign = "center";
        a012.c.fillStyle = "white";
        a012.c.fillText(t, a012.canvas.width / 2, a012.canvas.height / 2);
        a012.c.fillRect(a012.canvas.width / 3, (a012.canvas.height / 2) + 5, a012.canvas.width / 3, 1);
    }
    //GlowCircle
    function addGlowCircle() {
        var x = Math.random() * (a012.canvas.width - radius * 2) + radius;
        var y = Math.random() * (a012.canvas.height - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        a012.glowCircle.push(new a012.GlowCircle(x, y, dx, dy, 2, "white"));
        console.log("Hi glowCircle");
        console.log(a012.glowCircle);
    }
    //Musik
    var mySound = new Audio("Cheerleader.mp3");
    function playMusik(_event) {
        console.log("Musik an");
        mySound.play();
        mySound.loop = true;
        console.log(_event);
    }
    function pauseMusik(_event) {
        mySound.pause();
        console.log(_event);
    }
})(a012 || (a012 = {}));
//# sourceMappingURL=main.js.map