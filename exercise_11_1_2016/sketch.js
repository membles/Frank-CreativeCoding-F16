//var shape1;
//var shape2;

var shapes = [];

function setup(){
	createCanvas(600,600);
	noStroke();
	//shape1 = new Shape(200, 300, 60, 100, 1, color(22, 160, 133));
	//shape2 = new Shape(400, 300, 20, 60, 1, color(22, 160, 133));
	for(var i = 0; i < 10; i++){
		shapes[i] = new Shape(random(width), random(height), random(20, 160), random(1, 5), color(random(255), random(255), random(255)));
	}
}

function draw(){
	background(222);
	//shape1.update();
	//shape2.update();
	for(var i = 0; i < shapes.length; i++){
		shapes[i].update();
	}
}

function Shape(xPos, yPos, size, spd, c){
	this.xPos = xPos;
	this.yPos = yPos;
	this.minSize = size - 10;
	this.size = size;
	this.maxSize = size + 40;
	this.spd = spd;
	this.c = c;

	this.update = function(){
		fill(c);
		if(this.size <= this.minSize || this.size >= this.maxSize){
			this.spd *= -1;
		}
		this.size += this.spd;
		rect(this.xPos, this.yPos, this.size, this.size);
	}
};