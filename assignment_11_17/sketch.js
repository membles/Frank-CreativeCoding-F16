//Julian Frank
//Creative Coding Fall 2016
//Assignment 11.17

//queries for data from openweathermap.org. displays the temp for new york and visually portrays certain weather types (ie rain, etc)

var baseURL, city, APIkey, url;
var myData, globalData;
var temp, tempMappedBlue, tempMappedRed;
var weather;
var raindrops = [];
var clouds = [];

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
	for(var i = 0; i < 50; i++){
		raindrops[i] = new rain(random(7, 12), random(0, 500));
	}
	for(var i = 0; i < 25; i++){
		clouds[i] = new cloud();
	}
}

function loadNewData(){
	loadJSON(url, gotData);
}

function gotData(incomingData){
	globalData = incomingData;
}

function draw(){
	fill(255,255,255);
	if(globalData){
		//console.log(globalData);
		temp = globalData.main.temp;
		tempMappedBlue = map(temp, 0, 100, 255, 0);
		tempMappedRed = map(temp, 0, 100, 0, 255);
		background(tempMappedRed,0,tempMappedBlue);
		text(int(temp) + "°", width/2, height/2);

		//weather functionality
		weather = globalData.weather[0].main;
		if(weather == "Rain" || weather == "Drizzle"){
			for(var i = 0; i < raindrops.length; i++){
				raindrops[i].fall();
			}
		}
		else if(weather == "Snow"){
			for(var i = 0; i < raindrops.length; i++){
				raindrops[i].snow();
			}
		}
		else if(weather == "Clouds" || weather == "Thunderstorm"){
			for(var i = 0; i < clouds.length; i++){
				clouds[i].float();
			}
		}
	}
 }

 function rain(spd, offset){
 	this.xPos = random(0, width);
 	this.yPos = 0 - offset;
 	this.spd = spd;
 	this.fall = function(){
 		if(this.spd < 7){
 			this.spd = random(7, 12);
 		}
 		this.yPos += this.spd;
 		if(this.yPos > height){
 			this.yPos = 0;
 			this.xPos = random(0, width);
 		}
 		noStroke();
 		ellipse(this.xPos, this.yPos, 1, 5);
 	}
 	this.snow = function(){
 		if(this.spd >= 7){
 			this.spd = random(2, 6);
 		}
  		this.yPos += this.spd;
 		if(this.yPos > height){
 			this.yPos = 0;
 			this.xPos = random(0, width);
 		}
 		noStroke();
 		ellipse(this.xPos, this.yPos, 5, 5);		
 	}
 };

 function cloud(){
 	this.width = 200;
 	this.xPos = random(-800, width);
 	this.yPos = random(-20, 150);
 	this.spd = .3;
 	this.float = function(){
 		noStroke();
 		fill(255,255,255,160);
 		this.xPos += this.spd;
 		if(this.xPos > width){
 			this.xPos = random(-800, 0 - this.width);
 			this.yPos = random(-20, 150);
 		}
 		rect(this.xPos, this.yPos, this.width, 50);
 	}
 };