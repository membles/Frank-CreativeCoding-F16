var url, globalData;

function setup(){
	createCanvas(600,600);
	URL = 'http://api.open-notify.org/iss-now.json';

	setInterval(loadNewData, 2000);
}

function draw(){
	if(globalData){
		console.log(globalData.iss_positions.latitude);
	}
}

function loadNewData(){
	loadJSON(url, dataReceived);
}

function dataReceived(incomingData){
	globalData = incomingData;
	console.log(globalData);
}

function mouseClicked(){
	//loadJSON(url, dataReceived);
}