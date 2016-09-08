size(500,500); //determines size of sketch window
//background(255,255,255); //background color
int myInt = 200;
float xPos = 50.0;
String myStr = "Hello World!";
char myChar = '!';
boolean myBool = true;
//line(.5,1.5,70,50);
//rect(.5,1.5,65,35);
//ellipse(20,10,7,5);
//triangle(50,50,200,300,100,400);
//point(10,20);
//println("Hello!"); //prints on new line
//print("1"); //prints without making new line
//noFill(); //eliminates fill color, making it transparent
fill(255,0,127); //color; geometry must be declared after properties
noStroke(); //elimminates outlines
strokeWeight(4); //overrides noStroke() and sets outline width to 4px
stroke(255,255,255); //sets outline color
rect(xPos,1,myInt,myInt); //geometry will inherit properties above
println(myStr);
println(myChar);

//draw a custom shape
beginShape();
//draw shape vertex points (need at least three)
vertex(50,50);
vertex(100,100);
vertex(70,300);
//curveVertex(); //requires three points; curves the connecting lines
//endShape(); //leaves first and last vertex unconnected
endShape(CLOSE); //connects first and last vertex

void draw(){
 //stuff in here
}