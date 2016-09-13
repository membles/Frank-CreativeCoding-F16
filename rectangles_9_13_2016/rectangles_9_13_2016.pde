void setup(){
  size(600,500); 
  background(255,255,255);
  rect(0,0,300,500/3);
  rect(0,500/3,300,500-500/3);
  rect(300,0,200,500);
  rect(500,0,100,500);
}

void draw(){}

void mouseMoved(){
  if(mouseX < 300 && mouseY < 500/3){
    fill(255,255,0);
  }
  else{
    fill(255,255,255);
  }
  rect(0,0,300,500/3);
  if(mouseX < 300 && mouseY > 500/3){
    fill(0,255,0);
  }
  else{
    fill(255,255,255);
  }
  rect(0,500/3,300,500-500/3);
  if(mouseX > 300){
    fill(0,0,255);
  }
  else{
    fill(255,255,255);
  }
  rect(300,0,200,500);
  if(mouseX > 500){
    fill(0,0,0);
  }
  else if(mouseX > 300 && mouseX < 500){
    fill(0,0,255);
  }
  else{
    fill(255,255,255);
  }
  rect(500,0,100,500);
}