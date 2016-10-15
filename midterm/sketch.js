//For faking a moving camera, apply a +var to each coordinate in a level, then adjust based on player movement
var DEFAULT_SPD = 3;

var rectSize = 60;
var playerPosX;
var playerPosY;
var floorHeight;
var intro;
var segment1;
var movement;
var pressW;
var pressA;
var pressS;
var pressD;
var pressSpace;
var playerSpd;
var xPositive, xNegative;
var jumpHeight;
var jumpBool, inJump;
var floorPosX;
var frame;
//var bounce;

function setup() {
	createCanvas(1080, 720);
	noStroke();
	playerPosX = width/2 - rectSize/2;
	playerPosY = 0 - 150;
	floorHeight = height*3/4;
	intro = true;
	segment1 = true;
	movement = false;
	pressW = false;
	pressA = false;
	pressS = false;
	pressD = false;
	pressSpace = false;
	playerSpd = DEFAULT_SPD;
	jumpHeight = 100;
	jumpBool = false;
	inJump = false;
	floorPosX = 0;
	frame = 0;
	xPositive = false;
	xNegative = false;
	//bounce = true;
}

function floorUpdate(){
	rect(floorPosX, floorHeight, width*2, height/4);
}

function jump(){ //fix; can abuse by holding space; implement using frameCount
	if(!inJump){
		frame = frameRate;
		inJump = true;
	}
	if(playerPosY > floorHeight - rectSize - jumpHeight){
		playerPosY -= playerSpd;
	}
	else{
		jumpBool = false;
	}
}

function sceneUpdate(){ //floor moves too fast; figure out way to make it feel natural; idea: when level starts to move, set playerSpd = 0
	//broken; movement stops and level flow stops in direction
	if (playerPosX >= width - width/7 - rectSize/2 && xPositive){
		floorPosX -= playerSpd;
		playerSpd = 0;
	}
	else if(playerPosX < width/7 && xNegative){
		floorPosX += playerSpd;
		playerSpd = 0;
	}
	else{
		playerSpd = DEFAULT_SPD;
	}
}

function playerUpdate(){
	if(playerPosY < floorHeight - rectSize && !jumpBool){
		playerPosY += 2;
	}
	/*
	else if(bounce && playerPosY == floorHeight){
		for(var i = 0; i < 10; i++){
			playerPosY -= 6;
		}
		bounce = false;
	}
	if(playerPosY < height/2 - rectSize/2){
		bounce = true;
	}
	*/
	if(movement){
		if(pressA == true){
			playerPosX -= playerSpd;
			xNegative = true;
		}
		else{
			xNegative = false;
		}
		if(pressD == true){
			playerPosX += playerSpd;
			xPositive = true;
		}
		else{
			xPositive = false;
		}
		if(pressSpace){
			jumpBool = true;
		}
	}
	rect(playerPosX, playerPosY, rectSize, rectSize);
}

function levelUpdate(){ //handles movement/panning of everything besides player

}

function finishIntroTrans(){
	playerPosX -= 2;
	if(playerPosX <= width/7){
		intro = false;
		movement = true;
	}
}

function shapeParticles(){
	//particles flow from one side of screen to the other
}

function draw() {
	background(200,200,200);
	fill(20,20,20);
	playerUpdate();
	sceneUpdate();
	floorUpdate();
	if(jumpBool){
		jump();
	}
	if(playerPosY == floorHeight - rectSize && intro){
		finishIntroTrans();
	}
}

function keyPressed(){
	if(key == 'W'){ pressW = true; }
	if(key == 'A'){ pressA = true; }
	if(key == 'S'){ pressS = true; }
	if(key == 'D'){ pressD = true; }
	if(key == ' '){ pressSpace = true; }
}

function keyReleased(){
	if(key == 'W'){ pressW = false; }
	if(key == 'A'){ pressA = false; }
	if(key == 'S'){ pressS = false; }
	if(key == 'D'){ pressD = false; }
	if(key == ' '){ pressSpace = false; }
}