var moving,fixed;


function setup() {
  createCanvas(800,400);
  moving=createSprite(500,200,60,100);
  fixed=createSprite(200,200,100,100);
  moving.shapeColor="green";
  fixed.shapeColor="green";
  moving.velocityX=-2;
  fixed.velocityX=2;
}

function draw() {
  background("black");  
  reverse1();
  drawSprites();
 
}
 
function reverse1(){

  if(moving.x-fixed.x === moving.width/2+fixed.width/2){
    moving.velocityX=moving.velocityX*(-1);
    fixed.velocityX=fixed.velocityX*(-1);
  }
}