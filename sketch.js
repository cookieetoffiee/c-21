var fixedRect, movingRect;
var fixedRect1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "blue";
  //fixedRect.debug = true;
  fixedRect1 = createSprite(200,100,50,50);
  fixedRect1.shapeColor = "blue";
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "blue";
  //movingRect.debug = true;
}

function draw() {
  background("red");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(movingRect.isTouching(fixedRect)){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}
//else if (isTouching(movingRect,fixedRect1)){
  //movingRect.shapeColor = "yellow";
  //fixedRect1.shapeColor = "yellow";
//}
//else{
  movingRect.shapeColor="blue"
  fixed1Rect.shapeColor="blue"
  fixedRect.shapeColor="blue"
}
  drawSprites();
}

  