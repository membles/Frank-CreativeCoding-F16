//Julian Frank
//Assignment 11.1
//Creative Coding Fall 2016
//interactive animation of squares with random variables. click to interact.

var shapes = [];

function setup(){
	createCanvas(600,600);
	noStroke();
	//shape1 = new Shape(200, 300, 60, 100, 1, color(22, 160, 133));
	//shape2 = new Shape(400, 300, 20, 60, 1, color(22, 160, 133));
	for(var i = 0; i < 10; i++){
		shapes[i] = new Shape(random(width), random(height), random(-5, 5), random(-5, 5), random(20, 160), random(1, 5), color(random(255), random(255), random(255)));
	}
}

function addShape(){
	shapes[shapes.length] = new Shape(mouseX, mouseY, random(-5,5), random(-5,5), random(20, 160), random(1, 5), color(random(255), random(255), random(255)));
}

function draw(){
	background(222);
	if(mouseIsPressed){
		addShape();
	}
	for(var i = 0; i < shapes.length; i++){
		shapes[i].update();
	}
}

function Shape(xPos, yPos, xSpd, ySpd, size, spd, c){
	this.xPos = xPos;
	this.yPos = yPos;
	this.minSize = size - 10;
	this.size = size;
	this.maxSize = size + 40;
	this.spd = spd;
	this.c = c;
	this.xSpd = xSpd;
	this.ySpd = ySpd;

	this.update = function(){
		fill(c);
		if(this.size <= this.minSize || this.size >= this.maxSize){
			this.spd *= -1;
		}
		this.size += this.spd;

		//movement
		println(xSpd);
		if(xSpd == 0){xSpd += 1;}
		if(ySpd == 0){ySpd += 1;}
		if(this.xPos <= 0 || this.xPos >= width - this.size){
			this.xSpd *= -1;
		}
		if(this.yPos <= 0 || this.yPos >= height - this.size){
			this.ySpd *= -1;
		}
		this.xPos += this.xSpd;
		this.yPos += this.ySpd;

		rect(this.xPos, this.yPos, this.size, this.size);
	}
};