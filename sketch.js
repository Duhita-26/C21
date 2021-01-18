var fixedRectangle,movingRectangle;
var ball;

function setup() {
  createCanvas(800,400);

  fixedRectangle=createSprite(200, 200, 50, 80);
  fixedRectangle.velocityX = -3;

  movingRectangle=createSprite(400, 200, 80, 30);
  movingRectangle.velocityX = 3;

  ball = createSprite(300, 100, 50, 50);

  fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="yellow";
  ball.shapeColor = "Green";

}

function draw() {
  background(0); 
  //movingRectangle.x=World.mouseX;
  //movingRectangle.y=World.mouseY;


  console.log(movingRectangle.x- fixedRectangle.x);
  console.log(fixedRectangle.x- movingRectangle.x);

  bounceOff(movingRectangle, fixedRectangle)

  // if(isTouching(movingRectangle, ball)){
  
  //   ball.shapeColor="red";
  //   movingRectangle.shapeColor="red";
  // }
  // else{
  //   ball.shapeColor="green";
  //   movingRectangle.shapeColor="green";
  // }

  drawSprites();
}
