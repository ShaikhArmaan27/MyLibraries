var movingRectangle;
var stillRectangle;
var gameObject1;

function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(500, 200, 150, 50); 
  stillRectangle = createSprite(350,200,50,150);
  gameObject1 = createSprite(350,50,50,50);

  movingRectangle.debug = true 
  stillRectangle.debug = true
  gameObject1.debug = true

  
  stillRectangle.velocityY = -1;
  gameObject1.velocityY = 1 ;

}

function draw() {
  background(0,0,0);
   bounceOff(gameObject1,stillRectangle);
   
  drawSprites();
}

