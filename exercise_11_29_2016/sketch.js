//Julian Frank
//Creative Coding Fall 2016
//Exercise 11/29/2016

//part 2
var canvas, slider, pos, input, inputButton, inputValue;

function setup(){
	fill(255);
	canvas = createCanvas(600,600);
	slider = createSlider(1, 300, 50);
	slider.position(400,50);
	pos = 0;
	input = createInput("fruits etc");
	input.position(400,150);
	inputButton = createButton("Submit");
	inputButton.position(580,150);
	inputButton.mousePressed(readValue);
	myInputValue = "";
}

function draw(){
	background(20, 60, 140);
	var mySliderValue = slider.value();
	pos+=2;
	if(pos > width) pos = 0;
	pos+=2;
	ellipse(pos, height/2, mySliderValue, mySliderValue);
	text(myInputValue, width/2, 200);
}

function readValue(){
	myInputValue = input.value();
	console.log(myInputValue);
}

/* //part 1
var canvas, pos, myImage, myPar;

function setup(){
	canvas = createCanvas(400,300);
	canvas.position(400,200);
	canvas.mouseOver(movedOnto);
	canvas.mouseOut(movedOff);

	//create image element
	myImage = createImage("http://i.imgur.com/BfBx7S4.jpg");
	myImage.position(0,100);
	myImage.size(300,300);

	//create a paragraph element
	myPar = createP("This is a HTML paragraph");
	myPar.position(30,30);

	background(200);
	pos = 0;
}

function draw(){
	background(200);
	pos += 2;
	if(pos > width) pos = 0;
	ellipse(pos, height/2, 30, 30);
}

function movedOnto(){
	console.log("on canvas");
	myImage.hide();
}

function movedOff(){
	console.log("off canvas");
	myImage.show();
}

function myAction(){
	console.log("mouse went over the canvas");
}
*/