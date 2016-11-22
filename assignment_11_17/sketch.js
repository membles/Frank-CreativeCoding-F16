//Julian Frank
//Creative Coding Fall 2016
//Assignment 11.17

var baseURL, city, APIkey, url;
var myData, globalData;
var temp, tempMapped;

function setup(){
	createCanvas(600,600);
	baseURL = "http://api.openweathermap.org/data/2.5/weather?";
	city = "New York, ny";
	APIkey = "3bc1861cff7eafa383ffe82135bc04fb";
	url = baseURL + "q=" + city + "&callback=parseResponse&units=imperial&appid=" + APIkey;
	myData = loadJSON(url, gotData);
}

function gotData(){
	globalData = myData;
	console.log(globalData.parseResponse);
}

function draw(){
	if(frameCount % 18000 == 0){
		myData = loadJSON(url, gotData);
	}
	temp = globalData.parseResponse.main.temp;
	tempMapped = map(temp, 0, 100, 255, 0);
	background(0,0,tempMapped);
 }