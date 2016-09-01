package net.tlahmann.gdg.creation.object;

import net.tlahmann.gdg.creation.Patterizer;
import processing.core.PApplet;
import processing.core.PVector;

public class PStar {
	private Patterizer parent;
	private PVector[] points;
	private PVector center;

	public PStar(Patterizer p, float[] pos, float radius, float rotation, int ends) {
		parent = p;

		center = new PVector(pos[0], pos[1], 0);
		points = new PVector[ends];
		for (int i = 0; i < ends; i++) {
			float d = PApplet.map(i, 0, ends, 0, PApplet.TWO_PI) - PApplet.HALF_PI;
			points[i] = new PVector(center.x + PApplet.cos(d + rotation) * radius, center.y + PApplet.sin(d+ rotation) * radius);
//			points[i].rotate(rotation);
		}
	}

	public void display() {
		parent.stroke(parent.colors.x);
		parent.strokeCap(PApplet.SQUARE);
		parent.strokeWeight(parent.thickness.x);
		for (int i = 0; i < points.length; i++) {
			parent.line(center.x, center.y, points[i].x, points[i].y);
		}
	}
}
