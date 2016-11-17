//Julian Frank
//Creative Coding Fall 2016
//Assignment 11.15
//Visualizes the ratio of male to female artists who have work at the MOMA

/* //part 1
var myData;
var aShape;
var randIter;
var randHex;
var aColor;
var shapes = [];

function preload(){
	var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json';
	myData = loadJSON(url);
}

function setup(){
	createCanvas(600,600);
	noStroke();
	randIter = int(random(0, myData.colors.length));
	randHex = myData.colors[randIter].hex;
	shapes[0] = new Shape(randHex, width/2, height/2);
}

function draw(){
	if(mouseIsPressed){
		randHex = myData.colors[int(random(0, myData.colors.length))].hex;
		shapes[shapes.length] = new Shape(randHex, mouseX, mouseY);
	}
	for(var i = 0; i < shapes.length; i++){
		shapes[i].display(randHex);
	}
}

function Shape(hexVal, posX, posY){
	this.hexVal = hexVal;
	this.display = function(newHex){
		fill(this.hexVal);
		fill(newHex);
		ellipse(posX,posY,70,70);
	}
};
*/

/*
//pat 2
var myData;
var globalData;

function setup(){
	createCanvas(600,600);
	var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json';
	myData = loadJSON(url, gotData);
}

function gotData(myData){
	console.log(myData);
	globalData = myData;
}

function draw(){
	if(globalData){
		//do a thing with the data
	}
	else{
		//data isnt loaded yet; do something else
	}
}
*/

//part 3
var baseURL, city, APIkey, url;

function setup(){
	createCanvas(600,600);
	baseURL = "http://api.openweathermap.org/data/2.5/weather?";
	city = "New York,ny";
	APIkey = "3bc1861cff7eafa383ffe82135bc04fb";
	url = baseURL + "q=" + city + "&appid=" + APIkey;
	myData = loadJSON(url, gotData);
}

function gotData(){
	globalData = myData;
	console.log(globalData);
}

function mouseClicked(){
	city = "Tokyo";
	url = baseURL + "q=" + city + "&appid=" + APIkey;;
	myData = loadJSON(url, gotData);
}