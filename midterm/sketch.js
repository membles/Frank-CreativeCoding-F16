//For faking a moving camera, apply a +var to each coordinate in a level, then adjust based on player movement
//a way to do jumping independent of framecount; check height, change spd
var DEFAULT_SPD = 4;
var DEFAULT_AIR_SPD
var GRAVITY = 5;
var bgColor;
var floorColor;

var rectSize = 60;
var playerPosX;
var playerPosY;
var floorHeight;
var intro;
var segment1, segment2;
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
var panSpd;
var jumpSpd;
var floorWidth;
var dropWidth;
var stopMovement;
var vertPanning;
var envChangeY;

var chamberWidth, chamberHeight, chamberPosX, chamberPosY;

var clickShapes; //array for falling shapes in segment 2
//var bounce;

function setup() {
	createCanvas(1080, 720);
	noStroke();
	bgColor = color(20, 20, 34);
	floorColor = color(236, 240, 241);
	playerPosX = width/2 - rectSize/2;
	playerPosXLast = playerPosX;
	playerPosY = 0 - 150;
	floorHeight = height*3/4;
	intro = true;
	segment1 = true;
	segment2 = false;
	movement = false;
	stopMovement = false;
	pressW = false;
	pressA = false;
	pressS = false;
	pressD = false;
	pressSpace = false;
	playerSpd = DEFAULT_SPD;
	jumpHeight = 60;
	jumpBool = false;
	inJump = false;
	floorPosX = 0;
	frame = 0;
	xPositive = false;
	xNegative = false;
	panSpd = playerSpd;
	jumpSpd = 5;
	floorWidth = width*2;
	chamberPosX = floorPosX + floorWidth;
	chamberPosY = 700; //temp value; change later
	
	//for testing
	//chamberPosX = width/2;
	//chamberPosY = height/2;
	
	chamberHeight = 600;
	chamberWidth = 600;
	dropWidth = 180;
	vertPanning = false;
	envChangeY = 0;
	//bounce = true;
}

function floorUpdate(){
	fill(floorColor);
	rect(floorPosX, floorHeight + envChangeY, floorWidth, height/4);
}

function jump(){ //fix; can abuse by holding space; implement using frameCount
	if(!inJump){
		frame = frameRate;
		inJump = true;
	}
	if(playerPosY > floorHeight - rectSize - jumpHeight/4){
		playerPosY -= jumpSpd;
	}
	else if(playerPosY > floorHeight - rectSize - jumpHeight/3){
		playerPosY -= (jumpSpd - 1);
	}
	else if(playerPosY > floorHeight - rectSize - jumpHeight/2){
		playerPosY -= (jumpSpd - 2);
	}
	else if(playerPosY > floorHeight - rectSize - jumpHeight * 3/4){
		playerPosY -= (jumpSpd - 3);
	}
	else if(playerPosY > floorHeight - rectSize - jumpHeight){
		//playerPosY -= (jumpSpd - 4);
		jumpBool = false;
	}
	else{
		jumpBool = false;
	}
}

function chamberUpdate(){
	fill(bgColor);
	strokeWeight(50);
	stroke(floorColor);
	rect(chamberPosX, chamberPosY + envChangeY, chamberWidth, chamberHeight);
}

function playerUpdate(){
	if(segment1){
		if(!vertPanning){
			if(playerPosY < floorHeight - rectSize && !jumpBool && playerPosX <= floorPosX + floorWidth){
				playerPosY += GRAVITY;
			}
			else if(playerPosX > floorPosX + floorWidth){
				if(playerPosY < chamberPosY){
					playerPosY += GRAVITY;
				}
			}
		}
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
	}
	if(playerPosX > floorPosX - rectSize && playerPosX < floorPosX + floorWidth - 1){
		if(playerPosY > floorHeight - rectSize){
			playerPosY = floorHeight - rectSize;
		}
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
	rect(playerPosX, playerPosY, rectSize, rectSize);
}

function sceneUpdate(){ 
	if (playerPosX >= width*3/5 && xPositive){
		floorPosX -= panSpd;
		playerSpd = 0;
	}
	else if(playerPosX < width/7 && xNegative){
		floorPosX += panSpd;
		playerSpd = 0;
	}
	else{
		playerSpd = DEFAULT_SPD;
	}

	//code below breaks panning because uses same check and then stops resets playerSpd; need different method to handle
	//checks for collision with rightmost wall
	/*
	if(playerPosX >= floorPosX + floorWidth + dropWidth - rectSize && xPositive){
		playerSpd = 0;
	}
	else{
		playerSpd = DEFAULT_SPD;
	}
	*/

	//checks for collisions within drop
	if(playerPosY > (floorHeight - rectSize) + 1){
		if(playerPosY < chamberPosY){
			if(playerPosX <= floorPosX + floorWidth + 1 && xNegative){
				playerSpd = 0;
			}
			else{
				playerSpd = DEFAULT_SPD;
			}
		}
		if(playerPosY < chamberPosY + chamberHeight/2){
			vertPanning = true;
			envChangeY = -GRAVITY;
		}
		else{
			vertPanning = false;
			envChangeY = 0;
		}
	}

	if(playerPosY >= chamberPosY && segment2 != true){
		segment1 = false;
		segment2 = true;
	}

	playerUpdate();
	floorUpdate();
	chamberUpdate();
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

//both shapeParticles and shapeWave should be handled by sceneUpdate so as to pan
function shapeParticles(){
	//particles flow from one side of screen to the other
}

function squareWave(){
	//shape wave in background
}

function circleWave(){

}

function triWave(){

}

function draw() {
	background(bgColor);
	fill(232, 217, 93);
	noStroke();
	sceneUpdate();
	if(jumpBool){
		jump();
	}
	//intro; never called passed intro
	if(playerPosY == floorHeight - rectSize && intro){
		finishIntroTrans();
	}

	//segment 2
	if(segment2 == true){

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