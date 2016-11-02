var rotAmt = 0;

function setup(){
	createCanvas(500,500);
}

function draw(){
	background(255,255,255);
	translate(100,100);
	rotAmt = map(mouseX, 0, width, 0, 2+PI);
	rotate(rotAmt);
	//translate(100,100); //works like css positioning
	//scale(.5); //adjusts scale of shapes
	rect(100,100,40,40);
}