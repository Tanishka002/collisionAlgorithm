var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(220,200,50,50);
  car.shapeColor = "pink";
  car.velocityX=3;

  wall=createSprite(1000,200,50,80);
  wall.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  //if(isTouching(car,wall))   //if touching is true
  //{
   //car.velocityX=0;
 // }
  
  if(isTouching(fixedRect,movingRect))   //if touching is true
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor = "green";
  }
  BounceOff(car,wall);
  drawSprites();
}

//DRY-do not repeat the code 

