//Julian Frank
//Creative Coding Fall 2016
//Assignment 11.15
//Visualizes the ratio of male to female artists who have work at the MOMA

var myData, m, f;
var mPerc, fPerc;
var maxVal = 10000;
var barWidth = 200;

function preload(){
	myData = loadJSON("Artists.json");
}

function setup(){
	noStroke();
	m = 0; f = 0;
	createCanvas(600,600);
	for(var i = 0; i < myData.length; i++){
		if(myData[i].Gender == "Male"){
			m++;
		}
		else if(myData[i].Gender == "Female"){
			f++;
		}
	}
	mPerc = map(m, 0, maxVal, 0, height);
	fPerc = map(f, 0, maxVal, 0, height);
	fill(46, 204, 113);
	rect(width/2 - barWidth - 50, height - mPerc, barWidth, mPerc);
	fill(52, 152, 219);
	rect(width/2 + 50, height - fPerc, barWidth, fPerc);
}