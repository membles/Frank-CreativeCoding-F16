var keyW, keyA, keyS, keyD, keyUp, keyDown, keyLeft, keyRight;
var user;
var projectiles = [];

function setup(){
	createCanvas(700,700);
	background(200);
	//socket = io.connect("http://localhost:7000");
	keyW = false;
	keyA = false;
	keyS = false;
	keyD = false;
	keyUp = false;
	keyDown = false;
	keyLeft = false;
	keyRight = false;
	user = new Avatar;
	textAlign(CENTER);
	textSize(16);
	//socket.on('mouse', makeDrawing);
}

function draw(){
	background(200);
	user.update();
	/*
	for(var i = 0; i < this.projectiles.length; i++){
		projectiles[i].update();
	}
	*/
	if(projectiles.length == 1){ //for testing
		projectiles[0].update();
	}
}

function Avatar(){
	this.word = 'string';
	this.posX = width/2;
	this.posY = height/2;
	this.moveSpd = 3;
	this.projReady = true;
	this.update = function(){
		fill(0,55,100);
		if(keyW){
			this.posY -= this.moveSpd;
		}
		if(keyS){
			this.posY += this.moveSpd;
		}
		if(keyA){
			this.posX -= this.moveSpd;
		}
		if(keyD){
			this.posX += this.moveSpd;
		}
		text(this.word, this.posX, this.posY);


		if(keyIsPressed && this.projReady){
			this.projReady = false;
			if(keyCode == UP_ARROW){
				projectiles[projectiles.length] = new Projectile('c', "up");
			}
			if(keyCode == DOWN_ARROW){
				keyDown = true;
			}
			if(keyCode == LEFT_ARROW){
				keyLeft = true;
			}
			if(keyCode == RIGHT_ARROW){
				keyRight = true;
			}
		}
	}
};

function Projectile(c, dir){
	this.c = c;
	this.posX = user.posX;
	this.posY = user.posY;
	this.spdX = 0;
	this.spdY = 0;
	this.dir = dir;
	this.update = function(){
		println("test");
		if(this.dir == "up"){
			this.spdY = -4;
		}
		fill(100,15,40);
		rect(this.posX,this.posY,5,5);
		this.posY += this.spdY;
		this.posX += this.posX;
	}
};

function keyPressed(){
	if(key == 'W'){
		keyW = true;
	}
	if(key == 'A'){
		keyA = true;
	}
	if(key == 'S'){
		keyS = true;
	}
	if(key == 'D'){
		keyD = true;
	}
}

function keyReleased(){
	if(key == 'W'){
		keyW = false;
	}
	if(key == 'A'){
		keyA = false;
	}
	if(key == 'S'){
		keyS = false;
	}
	if(key == 'D'){
		keyD = false;
	}
	if(keyCode == UP_ARROW){
		user.projReady = true;
	}
	if(keyCode == DOWN_ARROW){
		keyDown = true;
	}
	if(keyCode == LEFT_ARROW){
		keyLeft = true;
	}
	if(keyCode == RIGHT_ARROW){
		keyRight = true;
	}
}

/*
function mouseClicked(){
	var myData = {
		x:mouseX,
		y:mouseY
	}

	socket.emit('mouse', myData);

	fill(140,10,30);
	rect(mouseX, mouseY, 40,40);
}

function mouseDragged(){
	var data = {
		x:mouseX,
		y:mouseY
	}
}

function draw(){

}
*/