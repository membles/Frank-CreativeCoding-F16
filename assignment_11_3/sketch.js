//Julian Frank
//Assignment 11.1
//Creative Coding Fall 2016
//interactive animation of squares with random variables. click to interact.
var despawn;
var instX, instY, instWidth, instHeight, instC;
var backC;
var note1, note2, note3;

var notes = [];
var sounds = [];

function preload(){
	sounds[0] = loadSound('assets/bolt.ogg');
	sounds[sounds.length] = loadSound('assets/bomb.ogg');
	sounds[sounds.length] = loadSound('assets/camera.ogg');
	sounds[sounds.length] = loadSound('assets/heart.ogg');
	sounds[sounds.length] = loadSound('assets/lock.ogg');
	sounds[sounds.length] = loadSound('assets/power-off.ogg');
	sounds[sounds.length] = loadSound('assets/star.ogg');
	sounds[sounds.length] = loadSound('assets/tree.ogg');
	sounds[sounds.length] = loadSound('assets/unlock-alt.ogg');
}

function setup(){
	createCanvas(1080,720);
	noStroke();
	backC = color(222);
	instC = color(0,40,120);
	despawn = 200;
	instWidth = 30;
	instHeight = 100;
	instX = width/2 - instWidth/2;
	instY = height/2 - instHeight/2;
	for(var i = 0; i < sounds.length; i++){
		sounds[i].playMode('sustain');
	}
	for(var i = 0; i < sounds.length; i++){
		notes[i] = new Note();
		notes[i].constructor();
	}
	note1 = int(random(notes.length));
	note2 = int(random(notes.length));
	note3 = int(random(notes.length));
}

function draw(){
	background(backC);
	instY = mouseY - instHeight/2;
	fill(instC);
	rect(instX, instY, instWidth, instHeight);
	if(notes[note1].update()){
		note1 = int(random(notes.length));
		while(note1 == note2 || note1 == note3){
			note1 = int(random(notes.length));
		}
	}
	if(notes[note2].update()){
		note2 = int(random(notes.length));
		while(note2 == note1 || note2 == note3){
			note2 = int(random(notes.length));
		}
	}
	if(notes[note3].update()){
		note3 = int(random(notes.length));
		while(note3 == note1 || note3 == note2){
			note3 = int(random(notes.length));
		}
	}
}

function Note(){
	this.constructor = function(){
		this.spd = random(-12,12);
		if(this.spd < 1 && this.spd > -1){
			this.spd = 1;
		}
		this.size = random(20, 160);
		if(this.spd < 0){
			this.xPos = width;
		}
		else if(this.spd > 0){
			this.xPos = 0 - this.size;
		}
		this.yPos = random(0, height - this.size);
		this.c = color(random(255), random(255), random(255));
		this.soundsNum = int(random(sounds.length));
	}
	this.adjust = function(){
		this.yPos = random(0, height - this.size);
		this.spd = random(-12,12);
		if(this.spd < 1 && this.spd > -1){
			this.spd = 1;
		}
		if(this.spd < 0){
			this.xPos = width;
		}
		else if(this.spd > 0){
			this.xPos = 0 - this.size;
		}
	}
	this.explode = function(){
		//explosion
	}
	this.update = function(){
		println("test");
		fill(this.c);
		
		this.xPos += this.spd;
		if(mouseIsPressed){
			this.xPos += this.spd;
		}
		rect(this.xPos, this.yPos, this.size, this.size);
		if(this.xPos > width + despawn || this.xPos < 0 - despawn){
			this.adjust();
			return true;
		}
		if(this.yPos <= instY + instHeight && this.yPos >= instY - this.size){
			if(this.xPos + this.size >= instX && this.xPos <= instX + instWidth){
				//explode();
				sounds[this.soundsNum].play();
				backC = instC;
				instC = this.c;
				this.constructor();
				return true;
			}
		}

		return false;


		/*
		//old
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
		*/
	}
};