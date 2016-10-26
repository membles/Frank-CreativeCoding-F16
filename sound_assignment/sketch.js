var xPos,yPos,size,spd,xSpd,ySpd;
var bounceSound;

function preload(){
	bounceSound = loadSound('assets/splatter0.wav');
}

function setup(){
	createCanvas(600,600);
	bounceSound.playMode('sustain');
	xPos = width/2;
	yPos = height/2;
	size = 30;
	xSpd = 5;
	ySpd = 3;
	noStroke();
}

function ballUpdate(){
	if(xPos >= width - size/2 || xPos <= 0 + size/2){
		xSpd *= -1;
		xPos += xSpd;
		bounceSound.play();
	}
	if(yPos >= height - size/2 || yPos <= 0 + size/2){
		ySpd *= -1;
		yPos += ySpd;
		bounceSound.play();
	}
	xPos += xSpd;
	yPos += ySpd;
	fill(241, 196, 15);
	ellipse(xPos, yPos, size, size);
}

function draw(){
	background(44, 62, 80);
	ballUpdate();
}