var square1;
var square2;


function setup() {
  createCanvas(800,400);
 square1 = createSprite(400, 200, 50, 50);
 square2 = createSprite(200, 300, 30, 60);
 square1.shapeColor  ="green";
 square2.shapeColor ="green";
}

function draw() {
  background(255,255,255);

  square2.x = World.mouseX;
  square2.y = World.mouseY;

  console.log(square2.x-square1.x);

  if (square2.x-square1.x<square2.width/2+square1.width/2&&
    square1.x-square2.x<square2.width/2+square1.width/2&&
    square2.y-square1.y<square2.height/2+square1.height/2&&
    square1.y-square2.y<square2.height/2+square1.height/2 ){

      square1.shapeColor  ="red";
      square2.shapeColor ="red";
  }

else{

  square1.shapeColor  ="green";
  square2.shapeColor ="green";


}


  drawSprites();







}