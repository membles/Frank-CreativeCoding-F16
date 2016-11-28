//Julian Frank
//Creative Coding Fall 2016
//Exercise 11/22/2016

//breaks on iterator == 1; reaches error when i click too frequently. switch to timed term change for testing and for main use.

var baseURL, apiKey, url, searchTerm, globalData;
var iterator;
var myTerms = [];

function setup(){
	noStroke();
	iterator = 0;
	createCanvas(600,600);
	myTerms[0] = "tacos";
	myTerms[1] = "apples";
	myTerms[2] = "fire%20extinguisher";
	baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	apiKey = "63a778d9664948a2a5e59d994fbb454c";
	//searchTerm = "tacos";
	url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[1];
	loadJSON(url, dataReceived);
}

function draw(){
	background(175,63,100,142);
	if(globalData){
		//console.log(globalData.response.docs[0].pub_date);
		fill(255);
		text(globalData.response.docs[0].pub_date, width/2, height/2);
		console.log(globalData);
	}
	console.log(iterator);
}

function loadNewData(){
	loadJSON(url, dataReceived);
}

function dataReceived(incomingData){
	globalData = incomingData;
}

function mouseClicked(){
	iterator++;
	if(iterator >= myTerms.length){
		iterator = 0;
	}
	url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[iterator];
	loadNewData();
}