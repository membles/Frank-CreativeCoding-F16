//Julian Frank
//Creative Coding Fall 2016
//Assignment 11.17

var baseURL, city, APIkey, url;
var myData, globalData;
var temp, tempMappedBlue, tempMappedRed;
var weather;
var raindrops = [];

function setup(){
	noStroke;
	createCanvas(600,600);
	baseURL = "http://api.openweathermap.org/data/2.5/weather?";
	city = "Newyork,ny";
	APIkey = "3bc1861cff7eafa383ffe82135bc04fb";
	url = baseURL + "q=" + city + "&units=imperial&appid=" + APIkey;
	loadJSON(url, gotData);
	setInterval(loadNewData, 30000);
	textAlign(CENTER);
	fill(255);
	textSize(60);
	textFont("Arial Black");
	for(var i = 0; i < 30; i++){
		raindrops[i] = new rain(random(5, 12));
	}
}

function loadNewData(){
	loadJSON(url, gotData);
}

function gotData(incomingData){
	globalData = incomingData;
}

function draw(){
	if(globalData){
		console.log(globalData);
		temp = globalData.main.temp;
		tempMappedBlue = map(temp, 0, 100, 255, 0);
		tempMappedRed = map(temp, 0, 100, 0, 255);
		background(tempMappedRed,0,tempMappedBlue);
		text(int(temp) + "°", width/2, height/2);

		//weather functionality
		weather = globalData.weather[0].main;
		if(weather == "Rain"){
			for(var i = 0; i < raindrops.length; i++){
				raindrops[i].fall();
			}
		}
	}
 }

 function rain(spd){
 	this.xPos = random(0, width);
 	this.yPos = 0;
 	this.spd = spd;
 	this.fall = function(){
 		this.yPos += this.spd;
 		if(this.yPos > height){
 			this.yPos = 0;
 			this.xPos = random(0, width);
 		}
 		noStroke();
 		ellipse(this.xPos, this.yPos, 1, 5);
 	}
 };