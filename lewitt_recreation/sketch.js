//Recreation of Sol LeWitt's "Wall Drawing #370" in p5.js
//Julian Frnak
//9-29-2016

var thick;
var numRect;
function setup() {
	createCanvas(600,630);
	background(255,255,255);
	thick = 18;
}

function draw() {
	background(35,31,32);
	noStroke();
	for(var i = 0; i < 35; i++){
		if(i%2 == 0){
			fill(35,31,32);
			//println(i);
		}
		else{
			fill(255,255,255);
			//println(i);
		}
		rect(0, i*thick, width, thick);
	}
	fill(35,31,32);
	triangle(width/8, thick*30, width - width/8, thick*30, width/2, thick*5);
	
	//overlay triangle
	fill(255,255,255);
	beginShape();
	vertex(width/8, thick*30);
	vertex(width - width/8, thick*30);
	vertex(width/2, thick*5);
	//left side of triangle
	numRect = 30;
	for(var i = 0; i < 12; i++){
		if(i%2 == 0){
			beginContour();
			vertex(width/8 + i*thick, numRect*thick);
			numRect -= 2;
			vertex(width/8 + i*thick + thick, numRect*thick);
			numRect-=2;
			vertex(width/8 + i*thick + thick, height - thick*5);
			vertex(width/8 + i*thick, height - thick*5);
			endContour();
		}
	}
	//middle
	beginContour();
	vertex(width/8 + 12*thick, 6*thick);
	vertex(width/8 + 12.5*thick, 5*thick);
	vertex(width/8 + 13*thick, 6*thick);
	vertex(width/8 + 13*thick, height - thick*5);
	vertex(width/8 + 12*thick, height - thick*5);
	endContour();
	//right side
	numRect = 8;
	for(var i = 14; i < 25; i++){
		if(i%2 == 0){
			beginContour();
			vertex(width/8 + i*thick, numRect*thick);
			numRect += 2;
			vertex(width/8 + i*thick + thick, numRect*thick);
			numRect += 2;
			vertex(width/8 + i*thick + thick, height - thick*5);
			vertex(width/8 + i*thick, height - thick*5);
			endContour();
		}
	}
	endShape();
}