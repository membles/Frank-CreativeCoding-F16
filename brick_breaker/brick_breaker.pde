int xPlayerPos;
int yPlayerPos;
int playerHeight;
int playerWidth;
int ballSize;
int xBallPos;
int yBallPos;
int xBallVel;
int yBallVel;
int xBallDir;
int yBallDir;
int brickWidth;
int brickHeight;
int playerLives;
int padding;

void setup(){
  size(800,600);
  background(255,255,255);
  padding = 20;
  playerLives = 3;
  playerWidth = 100;
  playerHeight = 15;
  xPlayerPos = width/2 - playerWidth/2;
  yPlayerPos = height - playerHeight - padding;
  ballSize = 15;
  xBallPos = width/2;
  yBallPos = height/2;
  xBallVel = 2;
  yBallVel = 2;
  xBallDir = 1;
  yBallDir = 1;
  ellipse(xBallPos, yBallPos, ballSize, ballSize);
  rect(xPlayerPos, yPlayerPos, playerWidth, playerHeight);
  
}

void draw(){
  if(xBallPos >= width - ballSize/2 || xBallPos <= 0 + ballSize/2){
    xBallDir = xBallDir * -1;
    xBallVel = xBallVel * xBallDir;
  }
  if(yBallPos <= 0 + ballSize/2){
    yBallDir = yBallDir * -1;
    yBallVel = yBallVel * yBallDir;
  }
}

void mouseMoved(){
  background(255,255,255);
  xPlayerPos = mouseX;
  rect(xPlayerPos - playerWidth/2, yPlayerPos, playerWidth, playerHeight);
}