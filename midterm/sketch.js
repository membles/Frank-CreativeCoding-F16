//Midterm Project
//Creative Coding
//Fall 2016
//Julian Frank


var DEFAULT_SPD = 4;
var DEFAULT_AIR_SPD
var GRAVITY = 5;
var bgColor;
var floorColor;
var bgWallColor;
var LAMP_HEIGHT = 250;
var LAMP_WIDTH = 20;
var lightColor;
var lightColorTrans;
var bulbWidth = 30;
var bulbHeight = 15;
var numLamps = 6;
var numHallLamps = 5;
var lightRayWidth;

var phase;
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
var bgPanSpd;
var jumpSpd;
var floorWidth;
var dropWidth;
var dropPosX;
var inDrop;
var stopMovement;
var vertPanning;
var envChangeY, envChangeX;
var bgChangeX, bgChangeY;
var playerChangeX;

var arrowX, arrowY;
var arrowSegCount;
var arrowSegSize, arrowSegPadding;

var chamberWidth, chamberHeight, chamberPosX, chamberPosY;

var closeDoors;
var doorFrameCount;
var doorPosX;
var doorSpd;
var doorHeight;
var hallWidth;

var end;
var split;
var fade;
var fadeTrans;

var openEndDoor;
var endDoorHeight;

var bridgeWidth;

var creatureGrow;
var creatureSize;
var creatureColorFade;

var restarted;

//var clickShapes; //array for falling shapes in segment 2
//var bounce;

function setup() {
	createCanvas(1080, 720);
	noStroke();
	bgColor = color(20, 20, 34);
	floorColor = color(236, 240, 241);
	lightColor = color(255,255,138);
	lightColorTrans = color(255,255,138,50);
	bgWallColor = color(76, 92, 104);
	playerPosX = width/2 - rectSize/2;
	playerPosXLast = playerPosX;
	playerPosY = 0 - 150;
	floorHeight = height*4/5;
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
	bgPanSpd = panSpd / 2;
	jumpSpd = 5;
	floorWidth = width*2; //width*5;
	chamberPosX = floorPosX + floorWidth + 50;
	chamberPosY = 1300; //temp value; change later

	closeDoors = false;
	openEndDoor = false;
	doorFrameCount = 0;
	doorPosX = floorPosX + floorWidth;
	doorSpd = 4;
	doorHeight = 0;
	doorPadding = 80;
	hallWidth = width*2;
	endDoorHeight = 0;
	
	lightRayWidth = bulbWidth * 3;
	
	chamberHeight = 600;
	chamberWidth = 600;
	dropWidth = 180;
	dropPosX = floorPosX + floorWidth - 5 + (hallWidth * ((numHallLamps-1)/numHallLamps)) - dropWidth/2 + bulbWidth/2;
	inDrop = false;
	vertPanning = false;
	envChangeY = 0;
	envChangeX = 0;
	playerChangeX = 0;
	bgChangeX = 0;
	bgChangeY = 0;

	arrowX = floorPosX + width*3/5;
	arrowY = floorHeight - 200;
	arrowSegCount = 0;
	arrowSegSize = 20;
	arrowSegPadding = 3;
	//bounce = true;

	phase = 1;

	end = false;
	split = false;
	fade = false;
	fadeTrans = 0;

	bridgeWidth = 1000;
	creatureGrow = false;
	creatureSize = 30;
	creatureColorFade = 255;

	restarted = false;
}

function restart(){
	playerPosX = width/2 - rectSize/2;
	playerPosXLast = playerPosX;
	playerPosY = 0 - 600;
	floorHeight = height*4/5;
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
	bgPanSpd = panSpd / 2;
	jumpSpd = 5;
	floorWidth = width*2; //width*5;
	chamberPosX = floorPosX + floorWidth + 50;
	chamberPosY = 1300; //temp value; change later

	closeDoors = false;
	openEndDoor = false;
	doorFrameCount = 0;
	doorPosX = floorPosX + floorWidth;
	doorSpd = 4;
	doorHeight = 0;
	doorPadding = 80;
	hallWidth = width*2;
	endDoorHeight = 0;
	
	lightRayWidth = bulbWidth * 3;
	
	chamberHeight = 600;
	chamberWidth = 600;
	dropWidth = 180;
	dropPosX = floorPosX + floorWidth - 5 + (hallWidth * ((numHallLamps-1)/numHallLamps)) - dropWidth/2 + bulbWidth/2;
	inDrop = false;
	vertPanning = false;
	envChangeY = 0;
	envChangeX = 0;
	playerChangeX = 0;
	bgChangeX = 0;
	bgChangeY = 0;

	arrowX = floorPosX + width*3/5;
	arrowY = floorHeight - 200;
	arrowSegCount = 0;
	arrowSegSize = 20;
	arrowSegPadding = 3;
	//bounce = true;

	phase = 1;

	end = false;
	split = false;
	fade = false;
	fadeTrans = 0;

	bridgeWidth = 1000;
	creatureGrow = false;
	creatureSize = 30;
	creatureColorFade = 255;

	restarted = true;
}

function hallway(){
	doorPosX = floorPosX + floorWidth + 50;
	//bg wall
	fill(bgWallColor);
	rect(doorPosX, floorHeight - 250, hallWidth - 50 - 5, 250);

	fill(floorColor);

	//ceiling
	rect(floorPosX + floorWidth - 5, floorHeight - 720*4/5, hallWidth, 720*4/5 - 250);

	//floor
	rect(floorPosX + floorWidth - 5, floorHeight, hallWidth, 1200);

	if(playerPosX > floorPosX + floorWidth - 5 + 300){
		closeDoors = true;
	}
	if(phase == 2 && playerPosX > floorPosX + floorWidth - 5 + hallWidth - 300 && closeDoors == true){
		openEndDoor = true;
	}

	for(var i = 1; i < numHallLamps; i++){
		fill(lightColor);
		rect(floorPosX + floorWidth - 5 + (hallWidth * (i/numHallLamps)), floorHeight - 250, bulbWidth, bulbHeight/2);
		//fill(lightColorTrans);
		//quad(floorPosX + floorWidth - 5 + (hallWidth * (i/numHallLamps)), floorHeight - 250 + bulbHeight/2, floorPosX + floorWidth - 5 + (hallWidth * (i/numHallLamps)) + bulbWidth, floorHeight - 250 + bulbHeight/2, floorPosX + floorWidth - 5 + (hallWidth * (i/numHallLamps)) + bulbWidth + lightRayWidth, floorHeight, floorPosX + floorWidth - 5 + (hallWidth * (i/numHallLamps)) - lightRayWidth, floorHeight);
	}


	fill(floorColor);
	if(closeDoors == true){
		doorFrameCount++;
		doorHeight += doorSpd;
		//doorPosX = floorPosX + floorWidth + 50;
		rect(doorPosX, floorHeight - 250 - 4, 30, doorHeight);
		rect(doorPosX, floorHeight + 4 - doorHeight, 30, doorHeight);

		if(doorHeight >= 40){
			rect(doorPosX + doorPadding, floorHeight - 250 - 4, 30, (doorHeight - 40));
			rect(doorPosX + doorPadding, floorHeight + 4 - (doorHeight - 40), 30, (doorHeight - 40));
		}

		if(doorHeight >= 80){
			rect(doorPosX + doorPadding*2, floorHeight - 250 - 4, 30, (doorHeight - 80));
			rect(doorPosX + doorPadding*2, floorHeight + 4 - (doorHeight - 80), 30, (doorHeight - 80));
		}
	}

	//drop space
	dropPosX = floorPosX + floorWidth - 5 + (hallWidth * ((numHallLamps-1)/numHallLamps)) - dropWidth/2 + bulbWidth/2;
	if(phase == 1){
		fill(bgWallColor);
		rect(dropPosX, floorHeight, dropWidth, 1200);
	}
	else if(phase == 2){
		if(openEndDoor && endDoorHeight <= 125){
			endDoorHeight += doorSpd;
		}
	}

	//end door
	fill(floorColor);
	rect(doorPosX + hallWidth - 5 - 50 - 50, floorHeight - 250 - endDoorHeight, 50, 125);
	rect(doorPosX + hallWidth - 5 - 50 - 50, floorHeight - 125 + endDoorHeight, 50, 125);


}

function dirArrow(){
	arrowX += bgChangeX;
	//arrowY += bgChangeY;
	arrowY += envChangeY;
	if(frameCount % 30 == 0){
		arrowSegCount++;
	}

	if(arrowSegCount >= 1){
		for(var i = 0; i < 3; i++){
			rect(arrowX, arrowY + i*arrowSegSize + i*arrowSegPadding, arrowSegSize, arrowSegSize);
		}
	}
	if(arrowSegCount >= 2){
		for(var i = 0; i < 3; i++){
			rect(arrowX + arrowSegSize + arrowSegPadding, arrowY + i*arrowSegSize + i*arrowSegPadding, arrowSegSize, arrowSegSize);
		}
	}
	if(arrowSegCount >= 3){
		for(var i = 0; i < 3; i++){
			rect(arrowX + 2*arrowSegSize + 2*arrowSegPadding, arrowY + i*arrowSegSize + i*arrowSegPadding, arrowSegSize, arrowSegSize);
		}
	}
	if(arrowSegCount >= 4){
		for(var i = 0; i < 3; i++){
			rect(arrowX + 3*arrowSegSize + 3*arrowSegPadding, arrowY + i*arrowSegSize + i*arrowSegPadding, arrowSegSize, arrowSegSize);
		}
	}
	if(arrowSegCount >= 5){
		for(var i = 0; i < 5; i++){
			rect(arrowX + 4*arrowSegSize + 4*arrowSegPadding, arrowY - arrowSegSize - arrowSegPadding + i*arrowSegSize + i*arrowSegPadding, arrowSegSize, arrowSegSize);
		}
	}
	if(arrowSegCount >= 6){
		for(var i = 0; i < 3; i++){
			rect(arrowX + 5*arrowSegSize + 5*arrowSegPadding, arrowY + i*arrowSegSize + i*arrowSegPadding, arrowSegSize, arrowSegSize);
		}
	}
	if(arrowSegCount >= 7){
		rect(arrowX + 6*arrowSegSize + 6*arrowSegPadding, arrowY + arrowSegSize + arrowSegPadding, arrowSegSize, arrowSegSize);
	}
}

function floorUpdate(){
	fill(floorColor);
	floorPosX += envChangeX;
	floorHeight += envChangeY;
	rect(floorPosX, floorHeight + envChangeY, floorWidth, 1200);
}

function wallUpdate(){
	fill(floorColor);
	rect(floorPosX - 50, 0, 50, height);
	//rect(doorPosX + hallWidth - 5 - 50 - 50, floorHeight - 250, 50, 300);
}

function jump(){ //fix; can abuse by holding space; implement using frameCount
	pressSpace = false;
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

function lampUpdateBack(){
	for(var i = 1; i < numLamps; i++){
		if(i % 2 != 0){
			fill(floorColor);
			rect(floorPosX + (floorWidth * (i/numLamps)), floorHeight - LAMP_HEIGHT, LAMP_WIDTH, LAMP_HEIGHT);
			fill(lightColor);
			rect(floorPosX + (floorWidth * (i/numLamps)) - 5, floorHeight - LAMP_HEIGHT, bulbWidth, bulbHeight);
			fill(lightColorTrans);
			quad(floorPosX + (floorWidth * (i/numLamps)) - 5, floorHeight + bulbHeight - LAMP_HEIGHT, floorPosX + (floorWidth * (i/numLamps)) + bulbWidth - 5, floorHeight + bulbHeight - LAMP_HEIGHT, floorPosX + (floorWidth * (i/numLamps)) + bulbWidth + lightRayWidth - 5, floorHeight, floorPosX + (floorWidth * (i/numLamps)) - 5 - lightRayWidth, floorHeight);
		}
	}
}

function lampUpdateFront(){
	fill(floorColor);
	for(var i = 1; i < numLamps; i++){
		if(i % 2 == 0){
			fill(lightColorTrans);
			quad(floorPosX + (floorWidth * (i/numLamps)) - 5, floorHeight + bulbHeight - LAMP_HEIGHT, floorPosX + (floorWidth * (i/numLamps)) + bulbWidth - 5, floorHeight + bulbHeight - LAMP_HEIGHT, floorPosX + (floorWidth * (i/numLamps)) + bulbWidth + lightRayWidth - 5, floorHeight, floorPosX + (floorWidth * (i/numLamps)) - 5 - lightRayWidth, floorHeight);
			fill(lightColor);
			rect(floorPosX + (floorWidth * (i/numLamps)) - 5, floorHeight - LAMP_HEIGHT, bulbWidth, bulbHeight);
			fill(floorColor);
			rect(floorPosX + (floorWidth * (i/numLamps)), floorHeight - LAMP_HEIGHT, LAMP_WIDTH, LAMP_HEIGHT);
		}
	}
}

function chamberUpdate(){
	fill(bgColor);
	strokeWeight(50);
	stroke(floorColor);
	chamberPosX += envChangeX;
	chamberPosY += envChangeY;
	rect(floorPosX + floorWidth, chamberPosY, chamberWidth, chamberHeight);
}

function bridgeUpdate(){
	fill(floorColor);
	rect(doorPosX + hallWidth - 55, floorHeight, bridgeWidth, 75);

	//creature
	if(playerPosX >= doorPosX + hallWidth + bridgeWidth - 55 - 100 - rectSize){
		creatureGrow = true;
	}
	if(creatureGrow == true){
		creatureSize += 25;
	}
	if(creatureSize > 1600){
		restart();
	}
	fill(231, 76, 60);
	rect(doorPosX + hallWidth + bridgeWidth - 55 - 100 - (creatureSize - 30)/2, floorHeight - 30 - (creatureSize - 30)/2, creatureSize, creatureSize);

	if(frameCount % 8 == 0 && !creatureGrow){
		for(var i = 0; i < 4; i++){
			fill(142, 68, 173, 240);
			rect(doorPosX + hallWidth + bridgeWidth - 55 - 100 + 15, floorHeight - 30 - 15, 30, 30);
		}		
	}
	if(frameCount % 10 == 0 && !creatureGrow){
		fill(41, 128, 185, 240);
		rect(doorPosX + hallWidth + bridgeWidth - 55 - 100 - 15, floorHeight - 30 + 15, 30, 30);
	}
}

function playerUpdate(){
	fill(232, 217, 93);
	if(segment1){
		if(!vertPanning){
			if(playerPosY < floorHeight - rectSize && !jumpBool){ //&& playerPosX <= floorPosX + floorWidth){
				playerPosY += GRAVITY;
			}
			if(phase == 1 && playerPosX > dropPosX && playerPosX < dropPosX + dropWidth + 1 - rectSize && !jumpBool && playerPosY < floorHeight + 5){
				playerPosY += GRAVITY;
			}
			/*
			else if(playerPosX > floorPosX + floorWidth){
				if(playerPosY < chamberPosY){
					playerPosY += GRAVITY;
				}
			}
			*/
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

	if(phase == 1 && playerPosY > floorHeight - rectSize && playerPosX > dropPosX && playerPosX < dropPosX + dropWidth + 1 - rectSize){
		inDrop = true;
	}
	
	if(inDrop && playerPosY > floorHeight + 1 - rectSize && playerPosY < floorHeight + 1200){
		if(playerPosX < dropPosX){
			playerPosX = dropPosX;
		}
		else if(playerPosX > dropPosX + dropWidth - rectSize){
			playerPosX = dropPosX + dropWidth - rectSize;
		}
	}
	if(phase == 1 && playerPosX > floorPosX - rectSize && (playerPosX < dropPosX || playerPosX > dropPosX + dropWidth + 1 - rectSize) && !inDrop){ //&& playerPosX < floorPosX + floorWidth - 1){
		if(playerPosY > floorHeight - rectSize){
			playerPosY = floorHeight - rectSize;
		}
	}
	else if(phase == 2 && playerPosX > floorPosX - rectSize && !inDrop){
		if(playerPosY > floorHeight - rectSize){
			playerPosY = floorHeight - rectSize;
		}
	}
	if(playerPosX < floorPosX){
		playerPosX = floorPosX;
	}
	if(closeDoors){
		if(playerPosX < doorPosX + doorPadding*2 + 30 && doorHeight > 80){
			playerPosX = doorPosX + doorPadding*2 + 30;
		}
	}
	if(end == true && playerPosY > height/2 - rectSize/2){
		playerPosY -= GRAVITY;
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
	rect(playerPosX + playerChangeX, playerPosY, rectSize, rectSize);
}

function fadeScreen(){
	if(fade){
		fadeTrans += 2;
	}
	fill(255,255,255, fadeTrans);
	noStroke();
	rect(0, 0, width, height);
}

function sceneUpdate(){ 
	if (playerPosX >= width/2 && xPositive && !inDrop){
		//floorPosX -= panSpd;
		envChangeX = -panSpd;
		bgChangeX = -panSpd/2;
		playerSpd = 0;
	}
	else if(playerPosX < width/7 && xNegative){
		//floorPosX += panSpd;
		envChangeX = panSpd;
		bgChangeX = panSpd/2;
		playerSpd = 0;
	}
	else{
		envChangeX = 0;
		bgChangeX = 0;
		playerSpd = DEFAULT_SPD;
	}

	if(inDrop && playerPosY >= floorHeight + 5){
		envChangeY = -GRAVITY;
	}

	if(!intro){
		dirArrow();
	}

	/*
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
	*/

	//chamberUpdate();
	noStroke();
	hallway();
	lampUpdateBack();
	playerUpdate();

	if(playerPosY > floorHeight + 1900){
		end = true;
		closeDoors = false;
		phase = 2;
	}
	if(playerPosY >= floorHeight - rectSize - 10 && playerPosY < floorHeight - rectSize){
		inDrop = false;
	}
	if(floorHeight < height*4/5 && playerPosX < doorPosX){
		envChangeY = 0;
		//fade = true;
	}

	if(end == true && playerPosY > floorHeight + 2000){
		end = false;
		floorPosX = 0;
		floorHeight = 1200;
		arrowY = floorHeight - 200;
		arrowX = floorPosX + width*3/5;
		closeDoors = false;
		doorHeight = 0;
		arrowSegCount = 0;
	}

	if(phase == 2){
		bridgeUpdate();
	}

	lampUpdateFront();
	floorUpdate();
	wallUpdate();
	fadeScreen();
	if(restarted){
		if(creatureColorFade > 0){
			creatureColorFade -= 5;
		}
		fill(231, 76, 60, creatureColorFade);
		rect(0, 0, width, height);
		if(creatureColorFade == 0){
			restarted = false;
		}
	}
}

function finishIntroTrans(){
	playerPosX -= 2;
	floorPosX -= 2;
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
	if(key == ' ' && playerPosY == floorHeight - rectSize){ pressSpace = true; }
	if(keyCode == UP_ARROW){ pressW = true; }
	if(keyCode == LEFT_ARROW){ pressA = true; }
	if(keyCode == DOWN_ARROW){ pressS = true; }
	if(keyCode == RIGHT_ARROW){ pressD = true; }
}

function keyReleased(){
	if(key == 'W'){ pressW = false; }
	if(key == 'A'){ pressA = false; }
	if(key == 'S'){ pressS = false; }
	if(key == 'D'){ pressD = false; }
	if(key == ' '){ pressSpace = false; }
	if(keyCode == UP_ARROW){ pressW = false; }
	if(keyCode == LEFT_ARROW){ pressA = false; }
	if(keyCode == DOWN_ARROW){ pressS = false; }
	if(keyCode == RIGHT_ARROW){ pressD = false; }
}