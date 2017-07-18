/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 17.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var a012;
(function (a012) {
    window.addEventListener("load", init);
    function init(_event) {
        a012.canvas = document.getElementsByTagName("canvas")[0];
        a012.c = a012.canvas.getContext("2d");
        console.log(a012.canvas);
        //       new Circle(100, 100, 50, 50, 5, "black");
    }
    ;
    a012.maxRadius = 40;
    a012.minRadius = 2;
    a012.colorArray = ["#2FA9E1", "#5D8699", "#35FFD1", "#FF8475", "#CC162F"];
    window.addEventListener("mousemove", function (event) {
        a012.mouse.x = event.x;
        a012.mouse.y = event.y;
        console.log(a012.mouse);
    });
    a012.circleArray = [];
    var color = a012.colorArray[Math.floor(Math.random() * a012.colorArray.length)];
    for (var i = 0; i < 100; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (a012.canvas.width - radius * 2) + radius;
        var y = Math.random() * (a012.canvas.height - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        a012.circleArray.push(new a012.Circle(x, y, dx, dy, radius, color));
    }
    function animate() {
        requestAnimationFrame(animate);
        a012.c.clearRect(0, 0, a012.canvas.width, a012.canvas.height);
        for (var i = 0; i < a012.circleArray.length; i++) {
            a012.circleArray[i].update();
        }
    }
    animate();
})(a012 || (a012 = {}));
//# sourceMappingURL=main.js.map