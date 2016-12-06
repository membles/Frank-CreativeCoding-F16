var keyW, keyA, keyS, keyD;
var user;

function setup(){
	createCanvas(700,700);
	background(200);
	//socket = io.connect("http://localhost:7000");
	keyW = false;
	keyA = false;
	keyS = false;
	keyD = false;
	user = new Avatar;
	textAlign(CENTER);
	textSize(16);
	//socket.on('mouse', makeDrawing);
}

function draw(){
	background(200);
	println("test");
	user.update();
}

function Avatar(){
	this.word = 'string';
	this.posX = width/2;
	this.posY = height/2;
	this.moveSpd = 3;
	this.projectiles = [];
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

		if(mouseIsPressed){
			this.projectiles[this.projectiles.length] = new Projectile('c', mouseX, mouseY);
		}
		for(var i = 0; i < this.projectiles.length; i++){
			this.projectiles[i].update();
		}
	}
};

function Projectile(c, destX, destY){
	this.c = c;
	this.posX = user.posX;
	this.posY = user.posY;
	this.update = function(){
		fill(100,15,40);
		rect(this.posX,this.posY,5,5);
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