//Julian Frank
//Creative Coding
//10-5-2016
//Assignment 10.04: Rotating Geometry

var rotAmt = 0;

function setup() {
	createCanvas(600,600);
	noStroke();
}

function draw() {
	//without using a for loop
	background(255,255,255);
	push();
	fill(50,150,89);
	translate(width/2,height/2);
	rotAmt = map(mouseX, 0, width, 0, 2*PI);
	rotate(rotAmt);
	rect(30,30,40,40);
	rect (60, 60, 40, 40);
	rect(90,90,40,40);
	translate(width/3,height/3);
	rect(0,0,40,40);
	pop();
	push();
	fill(60,80,120);
	translate(width*2/3, height/3);
	rotAmt = map(mouseX, 0, width, 0, 2*PI);
	rotate(rotAmt);
	rect(30,30,40,40);
	pop();

	//using a for loop
	push();
	fill(40, 160, 160);
	rotAmt = map(mouseX, 0, width, 0, 2*PI);
	for(var i = 0; i < 3; i++){
		translate(width/(i+1), height*2/3);
		rotate(rotAmt);
		rect(0,0,40,40);
	}
	pop();
}