var yPos;
var xPos;
function setup() {
	createCanvas(600,600);
	background(0);
	yPos = 0;
	xPos = 0;
}

function draw() {
	/*
	for(var i = 0; i < 10; i++){ 
		//ellipse(i * 50 + 40,height/2, 15, 15);
		for(var j = 0; j < 10; j++){
			fill(i*20, j*20, 200);
			rect(j * 40 + 20, i * 40 + 20, 20, 20)
		}
	}
	*/
	while(yPos < 10){
		while(xPos < 10){
			fill(yPos*20, xPos*20, 200);
			rect(xPos * 40 + 20, yPos * 40 + 20, 20, 20)
			xPos++;
		}
		yPos++;
		xPos = 0;
	}
}