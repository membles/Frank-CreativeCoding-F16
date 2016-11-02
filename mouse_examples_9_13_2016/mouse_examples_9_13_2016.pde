void setup(){
  size(600,600);
  background(255,255,255);
}

void draw(){ //draw required for 'active' mode (all of the mouse functions)
  //background(255,255,255);
  //fill(255,255,255,15);
  //rect(0,0,600,600);
  //ellipse(mouseX,mouseY,50,50); 
}

void mousePressed(){
  fill(255,0,0);
  //rect is (x,y,w,h)
  rect(mouseX,mouseY,60,30);
}

void mouseClicked(){
  fill(0,255,0);
  rect(mouseX,mouseY,60,20);
}

void mouseReleased(){
  fill(0,0,255);
  rect(mouseX,mouseY,60,10);
}

void mouseDragged(){
  fill(255,0,127);
  rect(mouseX,mouseY,60,5);
}

void mouseMoved(){
  fill (255,255,0);
  rect(mouseX,mouseY,30,30);
}