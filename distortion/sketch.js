var xPos,yPos,size,spd,xSpd,ySpd;

function setup(){
	createCanvas(600,600);
	xPos = width/2;
	yPos = height/2;
	size = 30;
	xSpd = 5;
	ySpd = 3;
}

function ballUpdate(){
	if(xPos >= width - size/2 || xPos <= 0 + size/2){
		xSpd *= -1;
		xPos += xSpd;
	}
	if(yPos >= height - size/2 || yPos <= 0 + size/2){
		ySpd *= -1;
		yPos += ySpd;
	}
	xPos += xSpd;
	yPos += ySpd;
	fill(0,30,150);
	ellipse(width/2, height/2, xPos, yPos);
}

function draw(){
	background(0);
	ballUpdate();
}