//Julian Frank
//Creative Coding Fall 2016
//recreation of the hover over rectangles exercise in p5js

function setup(){
  createCanvas(600,500); 
  background(255,255,255);
  rect(0,0,300,500/3);
  rect(0,500/3,300,500-500/3);
  rect(300,0,200,500);
  rect(500,0,100,500);
}

function draw(){}

function mouseMoved(){
  if(mouseX < 300 && mouseX >= 0 && mouseY < 500/3 && mouseY > 0){
    fill(255,255,0);
  }
  else{
    fill(255,255,255);
  }
  rect(0,0,300,500/3);
  if(mouseX < 300 && mouseY > 500/3 && mouseY < height){
    fill(0,255,0);
  }
  else{
    fill(255,255,255);
  }
  rect(0,500/3,300,500-500/3);
  if(mouseX > 300 && mouseX < width && mouseY > 0 && mouseY < height){
    fill(0,0,255);
  }
  else{
    fill(255,255,255);
  }
  rect(300,0,200,500);
  if(mouseX > 500 && mouseX < width && mouseY > 0 && mouseY < height){
    fill(0,0,0);
  }
  else if(mouseX > 300 && mouseX < 500 && mouseY > 0 && mouseY < height){
    fill(0,0,255);
  }
  else{
    fill(255,255,255);
  }
  rect(500,0,100,500);
}