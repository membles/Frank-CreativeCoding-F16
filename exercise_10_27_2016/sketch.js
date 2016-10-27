//var object;
var aBall;
var ball2;

function setup(){
	createCanvas(600,600);
	aBall = new Ball(width/2, height/2);
	ball2 = new Ball(400, 500);
	noStroke();
}

function draw(){
	background(220);
	fill(0,50,120);
	aBall.move();
	fill(0,120,50);
	ball2.move();
}

/*
function MyClass(){
	this.x = 200;
	this.y = 200;

	this.display = function(){
		ellipse(this.x, this.y, 40, 40);
	}
};
*/

function Ball(posX, posY, size, spdX, spdY){
	this.x = posX;
	this.y = posY;
	this.spdX = 4;
	this.spdY = 3;
	this.move = function(){
		if(this.x >= width || this.x <= 0){
			this.spdX *= -1;
		}
		if(this.y >= height || this.y <= 0){
			this.spdY *= -1;
		}
		this.x += this.spdX;
		this.y += this.spdY;
		ellipse(this.x, this.y, 30, 30);
	}
}