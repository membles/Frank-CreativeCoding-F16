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
var jumpHeight;
var jumpBool;
var floorPosX;
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
	playerSpd = 3;
	jumpHeight = 100;
	jumpBool = false;
	floorPosX = 0;
	//bounce = true;
}

function floorUpdate(){
	rect(0, floorHeight, width*2, height/4);
}

function jump(){ //fix; can abuse by holding space; implement using frameCount
	if(playerPosY > floorHeight - rectSize - jumpHeight){
		playerPosY -= playerSpd;
	}
	else{
		jumpBool = false;
	}
}

function sceneUpdate(){ //change to take advantage of camera(); will make my life eaasier; ALSO check out frameCount
	if (playerPosX >= width/7){
		floorPosX -= playerSpd;
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
			println("a is working in movement");
			playerPosX -= playerSpd;
		}
		if(pressD == true){
			playerPosX += playerSpd;
		}
		if(pressSpace){
			jumpBool = true;
		}
	}
	rect(playerPosX, playerPosY, rectSize, rectSize);
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