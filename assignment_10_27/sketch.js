//Assignment 10_27
//Julian Frank
//Creative Coding Fall 2016

/*
//Part 1
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

function setup(){
	createCanvas(600,600);
	ball1 = new Ball(width/2, height/2, 30, 4, 3, color(41, 128, 185));
	ball2 = new Ball(500, 60, 15, 4, 6, color(39, 174, 96));
	ball3 = new Ball(100, 500, 75, 2, 3, color(241, 196, 15));
	ball4 = new Ball(450, 400, 120, -3, -5, color(231, 76, 60));
	ball5 = new Ball(200, 350, 250, -2, 1, color(44, 62, 80));
	noStroke();
}

function draw(){
	background(220);
	ball1.move();
	ball2.move();
	ball3.move();
	ball4.move();
	ball5.move();
}

function Ball(posX, posY, size, spdX, spdY, c){
	this.x = posX;
	this.y = posY;
	this.spdX = spdX;
	this.spdY = spdY;
	this.move = function(){
		if(this.x >= width - size/2 || this.x <= 0 + size/2){
			this.spdX *= -1;
		}
		if(this.y >= height - size/2 || this.y <= 0 + size/2){
			this.spdY *= -1;
		}
		this.x += this.spdX;
		this.y += this.spdY;
		fill(c);
		ellipse(this.x, this.y, size, size);
	}
}
*/

//Part 2
var pattern1;
var pattern2;

function setup(){
	createCanvas(600,600);
	pattern1 = new Pattern(10, 10, 2, 1, 20, color(231, 76, 60));
	pattern2 = new Pattern(50, 50, 3, 6, 100, color(41, 128, 185));
	noStroke();
}

function draw(){
	background(220);
	pattern1.update();
	pattern2.update();
}

function Pattern(sizeX, sizeY, spdX, spdY, maxSize, c){
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.spdX = spdX;
	this.spdY = spdY;
	this.maxSize = maxSize;
	this.update = function(){
		fill(c);
		if(this.sizeX >= this.maxSize || this.sizeX <= 2){
			this.spdX *= -1;
			this.sizeX += this.spdX;
		}
		if(this.sizeY >= this.maxSize || this.sizeY <= 1){
			this.spdY *= -1;
			this.sizeY += this.spdY;
		}
		this.sizeX += this.spdX;
		this.sizeY += this.spdY;
		for(var i = 0; i < width + this.maxSize/2; i++){
			for(var j = 0; j < height + this.maxSize/2; j++){
				ellipse(i*this.maxSize + this.maxSize/2, j*this.maxSize + this.maxSize/2, this.sizeX, this.sizeY);
			}
		}
	}
};