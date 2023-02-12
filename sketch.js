var backg, backgImg, groundb, groundt
var balloon, balloonImg
var obtop1, obtop2
var obbot1, obbot2, obbot3

function preload(){
  backgImg=loadImage("assets/bg.png");
  balloonImg=loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
  obtop1=loadImage("assets/obsTop1.png")
  obtop2=loadImage("assets/obsTop2.png")
 
}

function setup(){
  createCanvas(400,400)
  backg=createSprite(165, 185, 1, 1);
  backg.addImage(backgImg)
  backg.scale= 0.5

  groundb=createSprite(200,380, 400, 20)
  groundt=createSprite(200,10, 400, 20)
  groundb.visible=false
  groundt.visible=false

  balloon=createSprite(100, 200, 20, 50)
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale=0.2
  
}

function draw(){
  if(keyDown("SPACE")){
    balloon.velocityY=-0.9

  }
  balloon.velocityY= balloon.velocityY+0.05;

    oB()
    drawSprites()
}

function oB(){

  if(World.frameCount%60===0){

    obtop1=createSprite(400, 50, 40 ,50)
    obtop1.velocityX=-2
  }
  


}