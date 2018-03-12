
var ball1;
var ball2;
var ball3;
var ball4;
var fr=1;
var speed=4;




function setup(){
 // put setup code here
 createCanvas(1400,700);
}

function mousePressed() {
ball1.clicked();
//ball2.clicked();
//ball3.clicked();
//ball4.clicked();
}
function draw() {

 background (235, 132, 169)

 ball1 = new Ball(200,200,40);
 ball2 = new Ball(500,200,20);
 ball3 = new Ball(800,200,20);
 ball4 = new Ball(1100,200,20);

 ball1.bounce();
  ball1.show();
  ball2.bounce();
  ball2.show();
  ball3.bounce();
  ball3.show();
  ball4.bounce();
  ball4.show();


 }

 class Ball {
  constructor(x, y, r) {
    this.y = y;
    this.x1 = x;
this.r = 100;
  }

clicked(){
let d = dist(mouseX,mouseY,this.x,this.y);
if (d<this.r) {
  console. log("CLICKED ON BALL1");
}
}

bounce() {
     frameRate(fr);
     this.y = this.y + random(-500,500);
     }


   show() {
      stroke(134, 239, 159);
      fill(134, 239, 159);
      ellipse(this.x1, this.y, this.r,100);
    }
  }
