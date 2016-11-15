//Julian Frank
//Creative Coding
//10-5-2016
//Assignment 10.04: Rotating Geometry

var rotAmt = 0;

function setup() {
	createCanvas(700,700);
	noStroke();
}

function draw() {
	background(44, 62, 80);
	push();
	fill(50,150,89);
	translate(width/2,height/2);
	rotAmt = map(frameCount, 0, 200, 0, 2*PI);
	rotate(rotAmt);
	ellipse(20,0,10,10);
	ellipse(0,20,10,10);
	ellipse(-20,0,10,10);
	ellipse(0,-20,10,10);
	fill(26, 188, 156);
	rotate(rotAmt);
	ellipse(40,0,15,15);
	ellipse(-40,0,15,15);
	ellipse(0,40,15,15);
	ellipse(0,-40,15,15);
	pop();

	push();
	fill(236, 240, 241);
	translate(width/2, height/2);
	rotAmt = map(frameCount, 0, 600, 0, -2*PI);
	rotate(rotAmt);
	ellipse(65,65,25,25);
	pop();

	push();
	fill(52, 152, 219);
	translate(width/2, height/2);
	rotAmt = map(frameCount, 0, 300, 0, 2*PI);
	rotate(rotAmt);
	ellipse(-110,-110,20,20);
	ellipse(110,110,20,20);
	ellipse(-110,110,20,20);
	ellipse(110,-110,20,20);
	ellipse(-150,0,30,30);
	ellipse(150,0,30,30);
	ellipse(0,150,30,30);
	ellipse(0,-150,30,30);
	pop();

	push();
	fill(241, 196, 15);
	translate(width/2, height/2);
	rotAmt = map(frameCount, 0, 100, 0, -2*PI);
	rotate(rotAmt);
	ellipse(220,0,50,50);
	ellipse(-220,0,50,50);
	pop();

	push();
	fill(230, 126, 34);
	translate(width/2, height/2);
	rotAmt = map(frameCount, 0, 275, 0, 2*PI);
	rotate(rotAmt);
	ellipse(-265,0,10,10);
	ellipse(265,0,10,10);
	ellipse(0,-265,10,10);
	ellipse(0,265,10,10);
	ellipse(-190,-190,10,10);
	ellipse(190,190,10,10);
	ellipse(190,-190,10,10);
	ellipse(-190,190,10,10);
	pop();

	push();
	fill(155, 89, 182);
	translate(width/2, height/2);
	rotAmt = map(frameCount, 0, 800, 0, 2*PI);
	rotate(rotAmt);
	ellipse(310,0,35,35);
	ellipse(-310,0,35,35);
	pop();
}