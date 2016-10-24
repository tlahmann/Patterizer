var PShape = class PShape {

    constructor(p, pos, radius, rotation, ends) {
        this.parent = p;

        this.center = new p5.Vector(pos[0], pos[1], 0);
        this.points = [];
        var i;
        for (i = 0; i < ends; i++) {
            var d = map(i, 0, ends, 0, TWO_PI) - HALF_PI;
            this.points.push(new p5.Vector(this.center.x + cos(d + rotation) * radius,
                                             this.center.y + sin(d + rotation) * radius));
        }
    }

    display() {
        this.parent.stroke(color(255, 255, 255, 255));
        this.parent.strokeWeight(thickness.y);
        if (!outline) {
            this.parent.strokeCap(SQUARE);
            var i;
            for (i = 0; i < this.points.length; i++) {
                this.parent.line(this.center.x, this.center.y, this.points[i].x, this.points[i].y);
            }
        } else {
            this.parent.strokeCap(ROUND);
            var i;
            for (i = 0; i < this.points.length - 1; i++) {
                this.parent.line(this.points[i].x, this.points[i].y, this.points[i + 1].x, this.points[i + 1].y);
            }
            this.parent.line(this.points[i].x, this.points[i].y, this.points[0].x, this.points[0].y);
        }
    }
}
