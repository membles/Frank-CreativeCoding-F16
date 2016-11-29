//Julian Frank
//Creative Coding Fall 2016
//Exercise 11/29/2016

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