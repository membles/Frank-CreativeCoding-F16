/*
function setup() {
	createCanvas(600,600);
	noStroke();
}

function draw() {}
	background(255,255,255);
	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			fill(j * 20, i * 20, i * j * 20);
			ellipse(j * 30 + 10, i * 30 + 10, 15, 15);
		}
	}
}
*/

var a, b, c, pct, yPos, xPos, r, g, b;
var ellX1, ellY1;
var ellX2, ellY2;
var minX, maxX;

function setup(){
	createCanvas(600,600);
	background(255,255,255);
	a = 100;
	b = width - 100;
	c = 0;
	pct = 0.5;
	//yPos = height/3;
	r = 255; g = 255; b = 255;
	minX = 100;
	maxX = 500;
}

function draw(){
	//linear interpolation
	/*
	c = lerp(a, b, pct);
	ellipse(a, yPos, 15, 15);
	ellipse(b, yPos, 15, 15);
	ellipse(c, yPos, 15, 15);
	*/

	//mapping
	//convert input range to output range
	//newValue = map(oldValue, inputMin, inputMax, outputMin, outputMax);

	//constrain
	//limit value from going beyond limits
	//newValue = constrain(value, minimum, maximum);
	background(255,255,255);
	xPos = constrain(mouseX, 100, 500);
	if(mouseX > 100 && mouseX < 500){
		yPos = constrain(mouseY, 0, 600);
	}
	r = map(xPos, 100, 500, 0, 255);
	g = map(yPos, 0, 600, 0, 255);
	b = map(xPos + yPos, 100, 1100, 0, 255);
	fill(r, g, b);
	rect(0, 0, 100, 600);
	rect(500, 0, 100, 600);
	ellX1 = map(mouseX, 0, width, minX, maxX);
	ellX1 = constrain(ellX1, minX, maxX);
	ellX2 = constrain(mouseX, minX, maxX);
	ellipse(ellX2, height/3, 20, 20);
	ellipse(ellX1, height*2/3, 20, 20);
}