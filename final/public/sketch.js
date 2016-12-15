var keyW, keyA, keyS, keyD, keyUp, keyDown, keyLeft, keyRight;
var user;
var projectiles = [];
var userDate, projData;
var fontSize = 16;
var avatarWidth, avatarHeight;

//for server
/*
add connections and sockets in setup
send out data in the functions that i need to
retrieve data from server
make use of server data to show other player movement, projectiles, etc
*/

function setup(){
	createCanvas(700,700);
	background(200);
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
	textSize(fontSize);
	avatarWidth = textWidth(user.word);
	avatarHeight = fontSize;
	socket = io.connect("http://localhost:7000");
	socket.on('avatar', updateUsers);
	socket.on('projectile', updateProj);
}

function draw(){
	user.update();
	userData = {
		posX:user.posX,
		posY:user.posY,
		word:user.word
	}
	socket.emit('avatar', userData);
	for(var i = 0; i < projectiles.length; i++){
		projectiles[i].update();
		if(i == projectiles.length - 1 && (projectiles[0].posX > width || projectiles[0].posX < 0 || projectiles[0].posY > height || projectiles[0].posY < 0)){
			projectiles.shift();
		}
	}
	projData = {
		projArray:projectiles
	}
	socket.emit('projectile', projData);
}

function updateUsers(data){
	background(200);
	fill(0,55,100);
	text(data.word, data.posX, data.posY);
	var otherUserWidth = textWidth(data.word);
	for(var i = 0; i < projectiles.length; i++){
		var projWidth = textWidth(projectiles[i].c);
		var projHeight = fontSize;
		if(projectiles[i].posX + projWidth/2 > data.posX - otherUserWidth/2 && projectiles[i].posX - projWidth/2 < data.posX + otherUserWidth/2){
			if(projectiles[i].posY + projHeight/2 > data.posY - avatarHeight/2 && projectiles[i].posY - projHeight/2 < data.posY + avatarHeight/2){
				projectiles[i].posX = -1000;
				projectiles[i].posY = -1000;
			}
		}
	}
}

function updateProj(data){
	fill(0,55,100);
	for(var i = 0; i < data.projArray.length; i++){
		text(data.projArray[i].c, data.projArray[i].posX, data.projArray[i].posY);
		var projWidth = textWidth(data.projArray[i].c);
		var projHeight = fontSize;
		if(data.projArray[i].posX + projWidth/2 > user.posX - avatarWidth/2 && data.projArray[i].posX - projWidth/2 < user.posX + avatarWidth/2){
			if(data.projArray[i].posY + projHeight/2 > user.posY - avatarHeight/2 && data.projArray[i].posY - projHeight/2 < user.posY + avatarHeight/2){
				user.addChar(data.projArray[i].c);
			}
		}
	}
}

function Avatar(){
	this.word = 'string';
	this.posX = width/2;
	this.posY = height/2;
	this.moveSpd = 3;
	this.projReady = true;
	this.projTimer = 30;
	this.frameRef = 0;
	this.projChar = this.word.charAt(this.word.length - 1);
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

		if(this.projReady == false && frameCount == this.frameRef + this.projTimer){
			this.projReady = true;
		}
		if(this.projReady && this.word.length > 1){
			if(keyIsPressed){
				if(keyCode == UP_ARROW){
					this.projReady = false;
					this.frameRef = frameCount;
					projectiles[projectiles.length] = new Projectile(this.projChar, "up");
				}
				if(keyCode == DOWN_ARROW){
					this.projReady = false;
					this.frameRef = frameCount;
					projectiles[projectiles.length] = new Projectile(this.projChar, "down");
				}
				if(keyCode == LEFT_ARROW){
					this.projReady = false;
					this.frameRef = frameCount;
					projectiles[projectiles.length] = new Projectile(this.projChar, "left");
				}
				if(keyCode == RIGHT_ARROW){
					this.projReady = false;
					this.frameRef = frameCount;
					projectiles[projectiles.length] = new Projectile(this.projChar, "right");
				}
				if(!this.projReady){
					this.word = this.word.slice(0, -1);
					println(this.word);
					this.projChar = this.word.charAt(this.word.length - 1);
				}
			}
		}
	}
	this.addChar = function(newChar){
		this.word += newChar;
		//console.log("test");
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
		if(this.dir == "up"){
			this.spdY = -5;
		}
		else if(this.dir == "down"){
			this.spdY = 5;
		}
		else if(this.dir == "left"){
			this.spdX = -5;
		}
		else if(this.dir == "right"){
			this.spdX = 5;
		}
		//fill(0);
		text(this.c,this.posX,this.posY);
		this.posY += this.spdY;
		this.posX += this.spdX;
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
	/*
	if(keyCode == UP_ARROW && user.projReady){
		keyUp = true;
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
	*/
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
	/*
	if(keyCode == UP_ARROW && user.projReady){
		keyUp = false;
	}
	if(keyCode == DOWN_ARROW){
		keyDown = false;
	}
	if(keyCode == LEFT_ARROW){
		keyLeft = false;
	}
	if(keyCode == RIGHT_ARROW){
		keyRight = false;
	}
	*/
}