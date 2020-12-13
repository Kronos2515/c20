var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;

  movingRect = createSprite(250,250,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  // rectMode = CENTER;

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
   fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
   movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
   fixedRect.y - movingRect.y < fixedRect.heigth/2 + movingRect.height/2 
    ){
   movingRect.shapeColor = "orange";
   fixedRect.shapeColor = "orange";

    }

    else{
      movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red"; 
    }

  drawSprites();
}