int xPlayerPos;
int yPlayerPos;
int xPlayerVel;
int yPlayerVel;
int xPlayerDir;
int yPlayerDir;
int playerSize;
int playerHP;

void setup(){
  size(600,600);
  background(255,255,255);
  playerSize = 60;
  playerHP = 3;
  xPlayerPos = width/2;
  yPlayerPos = height/2;
  ellipse(xPlayerPos, yPlayerPos, playerSize, playerSize);
}