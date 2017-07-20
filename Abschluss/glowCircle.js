var a012;
(function (a012) {
    class GlowCircle extends a012.Circle {
        constructor(_x, _y, _dx, _dy, _radius, _color) {
            super(_x, _y, _dx, _dy, _radius, _color);
        }
        //Erweiterung der Funktion draw(), um die Kreise zum Leuten zu bringen.
        draw() {
            a012.c.beginPath();
            a012.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            a012.c.fillStyle = this.color;
            a012.c.strokeStyle = "#fffacd";
            a012.c.shadowColor = "#FFFFFF";
            a012.c.shadowBlur = 20;
            a012.c.shadowOffsetX = 0;
            a012.c.shadowOffsetY = 0;
            a012.c.stroke();
        }
        ;
    }
    a012.GlowCircle = GlowCircle;
})(a012 || (a012 = {}));
//# sourceMappingURL=glowCircle.js.map