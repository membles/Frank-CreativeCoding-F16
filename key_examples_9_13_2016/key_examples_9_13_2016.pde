void setup(){
  size(600,600);
  background(255,255,255);
}

void draw(){
  if(mousePressed){
    background(0,40,150);
  }
  else{
    background(255,255,255);
  }
}

void keyPressed(){
  println(key);
}