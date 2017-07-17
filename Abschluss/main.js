/*
Aufgabe: A08
Name: Selina Mazzaro
Matrikel: 254068
Datum: 20.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
In Zusammenarbeit mit Jana Burger und Jacqueliene Wagner.*/
var a012;
(function (a012) {
    var canvas;
    window.addEventListener("load", init);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        a012.c = canvas.getContext("2d");
        console.log(canvas);
    }
    var maxRadius = 40;
    var minRadius = 2;
    var colorArray = ["#2FA9E1", "#5D8699", "#35FFD1", "#FF8475", "#CC162F"];
    window.addEventListener("mousemove", function (event) {
        event.x;
        event.y;
        console.log(event);
    });
    function Circle(x, y, dx, dy, radius /*, color: number*/) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        //        this.color = colorArray[Math.floor[Math.random() * colorArray.length]];
        this.draw = function () {
            a012.c.beginPath();
            a012.c.arc(this.x, this.y, this.radius, 8, Math.PI * 2, false);
            a012.c.strokeStyle = this.color;
            a012.c.stroke();
            a012.c.fillStyle = "blue";
            a012.c.fill();
        };
        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - radius < 8) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - radius < 8) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            //Interaktion
            //            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            //                if (this.radius < maxRadius) {
            //                    this.radius += 1;
            //                }
            //            }
            //            else if (this.radius > minRadius) {
            //                this.radius -= 1;
            //            }
            this.draw();
        };
        //        var circleArray: Circle[] = [];
        //
        //        for (var i: number = 0; i < 100; i++) {
        //            var radius: number = Math.random() * 3 + 1;
        //            var x: number = Math.random() * (canvas.width - radius * 2) + radius;
        //            var y: number = Math.random() * (canvas.height - radius * 2) + radius;
        //            var dx: number = (Math.random() - 0.5);
        //            var dy: number = (Math.random() - 0.5);
        //            circleArray.push(new Circle(x, y, dx, dy, radius, color));
        //        }
        //        
        //        function animate(): void {
        //            requestAnimationFrame(animate);
        //            c.clearRect(0, 0, canvas.width, canvas.height);
        //
        //            for (var i: number = 0; i < circleArray.length; i++) {
        //                circleArray[i].update();
        //            }
        //        }
        //
        //        animate();
    }
})(a012 || (a012 = {}));
//# sourceMappingURL=main.js.map