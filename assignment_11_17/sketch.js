//Julian Frank
//Creative Coding Fall 2016
//Assignment 11.17

var baseURL, city, APIkey, url;
var myData, globalData;
var temp, tempMapped;

function setup(){
	noStroke;
	createCanvas(600,600);
	baseURL = "http://api.openweathermap.org/data/2.5/weather?";
	city = "Newyork,ny";
	APIkey = "3bc1861cff7eafa383ffe82135bc04fb";
	url = baseURL + "q=" + city + "&callback=parseResponse&units=imperial&appid=" + APIkey;
	loadJSON(url, gotData);
	setInterval(loadNewData, 4000);
}

function loadNewData(){
	loadJSON(url, gotData);
}

function gotData(incomingData){
	globalData = incomingData;
	println("test");
}

function draw(){
	if(globalData){
		console.log(globalData.parseResponse);
		//console.log("test");
		//temp = globalData.parseResponse.main.temp;
		//tempMapped = map(temp, 0, 100, 255, 0);
		//background(0,0,tempMapped);
	}
 }