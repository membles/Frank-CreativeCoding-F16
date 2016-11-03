//Julian Frank
//Assignment 11.1
//Creative Coding Fall 2016
//interactive animation of squares with random variables. click to interact.

var shapes = [];
var sounds = [];

function preload(){
	//sounds[0] = loadSound('assets/tear block.wav');
	//sounds[sounds.length] = loadSound('assets/tear fire 5.wav');
	//sounds[sounds.length] = loadSound('assets/plop.wav');
	sounds[0] = loadSound('assets/mom.wav');
	sounds[sounds.length] = loadSound('assets/mom2.wav');
	sounds[sounds.length] = loadSound('assets/mom3.wav');
	sounds[sounds.length] = loadSound('assets/mom muffle.wav');
	sounds[sounds.length] = loadSound('assets/mom muffle 2.wav');
	sounds[sounds.length] = loadSound('assets/mom muffle 3.wav');
	sounds[sounds.length] = loadSound('assets/mom muffle 4.wav');
}

function setup(){
	println(sounds.length);
	createCanvas(600,600);
	noStroke();
	for(var i = 0; i < sounds.length; i++){
		sounds[i].playMode('sustain');
	}
	for(var i = 0; i < 4; i++){
		shapes[i] = new Shape(random(width - 160), random(height - 160), random(-3, 3), random(-3, 3), random(20, 160), random(1, 2), color(random(255), random(255), random(255)), int(random(sounds.length)));
	}
}

function addShape(){
	shapes[shapes.length] = new Shape(mouseX, mouseY, random(-5,5), random(-5,5), random(20, 160), random(1, 5), color(random(255), random(255), random(255)), int(random(sounds.length)));
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

function Shape(xPos, yPos, xSpd, ySpd, size, spd, c, soundsNum){
	this.xPos = xPos;
	this.yPos = yPos;
	this.minSize = size - 10;
	this.size = size;
	this.maxSize = size + 40;
	this.spd = spd;
	this.c = c;
	this.xSpd = xSpd;
	this.ySpd = ySpd;
	this.soundsNum = soundsNum;

	this.update = function(){
		//println(soundsNum);
		fill(c);
		/*
		if(this.size <= this.minSize || this.size >= this.maxSize){
			this.spd *= -1;
		}
		this.size += this.spd;
		*/
		//movement
		if(xSpd == 0){xSpd += 1;}
		if(ySpd == 0){ySpd += 1;}
		if(this.xPos <= 0 || this.xPos >= width - this.size){
			this.xSpd *= -1;
			this.xPos += this.xSpd*5;
			sounds[this.soundsNum].play();
		}
		if(this.yPos <= 0 || this.yPos >= height - this.size){
			this.ySpd *= -1;
			this.yPos += this.ySpd*5;
			sounds[this.soundsNum].play();
		}
		this.xPos += this.xSpd;
		this.yPos += this.ySpd;

		rect(this.xPos, this.yPos, this.size, this.size);
	}
};