var rotAmt = 0;

function setup(){
	createCanvas(500,500);
	noStroke();
	background(255,255,255);
	fill(60,140,140);
}

function draw(){
	//createShape();
	push();
	transform(width/2, height/2);
	createShape();
	pop();
}

function createShape(){
	beginShape();
	vertex(mouseX - 20, mouseY - 20);
	vertex(mouseX + 20, mouseY);
	vertex(mouseX + 10, mouseY + 15);
	vertex(mouseX - 10, mouseY + 15);
	endShape(CLOSE);
}