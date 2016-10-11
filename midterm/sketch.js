var rectSize = 60;
var playerPosX;
var playerPosY;
var floorHeight;
var intro;
var segment1;
var movement;
var pressW, pressA, pressS, pressD;
var playerSpd;
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
	playerSpd = 3;
	//bounce = true;
}

function floorUpdate(){
	rect(0, floorHeight, width, height/4);
}

function playerUpdate(){
	if(playerPosY < floorHeight - rectSize){
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
	if(playerPosY == floorHeight - rectSize && intro){
		finishIntroTrans();
	}
	if(pressD == true){
		println("aghh");
	}
}

function keyPressed(){
	println("keypressed worked");
	if(key == 'w'){ pressW = true; println("w boy");}
	if(key == 'a'){ pressA = true; }
	if(key == 's'){ pressS = true; }
	if(key == 'd'){ pressD = true; }
}

function keyReleased(){
	println("keyreleased worked");
	if(key == 'w'){ pressW = false; }
	if(key == 'a'){ pressA = false; }
	if(key == 's'){ pressS = false; }
	if(key == 'd'){ pressD = false; }
}