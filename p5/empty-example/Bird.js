function setup() {
  // put setup code here
  createCanvas(500, 500);
  background('#fae');

}

function draw() {
  // put drawing code here
//beak
  triangle(155, 230, 205, 200, 200, 250);
//body
quad(205, 200, 195, 300, 280, 400, 280, 300);
//back wing
  quad(280, 300, 350, 200, 250, 210, 228, 230);
//front wing
  quad(270, 230, 195, 300, 237, 350, 370, 230);


}
