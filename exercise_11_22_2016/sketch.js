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
	myTerms[1] = "cake";
	myTerms[2] = "fire%20extinguisher";
	myTerms[3] = "art";
	myTerms[4] = "animal";
	myTerms[5] = "politics";
	myTerms[6] = "nature";
	myTerms[7] = "sleep";
	baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	apiKey = "63a778d9664948a2a5e59d994fbb454c";
	//searchTerm = "tacos";
	url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[0];
	loadJSON(url, dataReceived);
	textAlign(CENTER);
	setInterval(loadNewData, 4000);
}

function draw(){
	background(175,63,100,142);
	if(globalData){
		if(iterator >= globalData.response.docs.length){
			iterator = 0;
		}

		//console.log(globalData.response.docs[0].pub_date);
		fill(255);
		text(globalData.response.docs[1].headline.main, width/2, height/2);
		//console.log(globalData);
	}
	else{
		println("no data yet~");
	}
}

function loadNewData(){
	iterator++;
	if(iterator >= myTerms.length){
		iterator = 0;
	}
	url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[iterator];
	loadJSON(url, dataReceived);
	println("loaded");
}

function dataReceived(incomingData){
	globalData = incomingData;
}