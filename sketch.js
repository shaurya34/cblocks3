const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var blueb,pinkb,redb,yellowb,lava,back,rgp,pgp,ygp;
var bImg,pImg,rImg,yImg,lImg,backImg;
var score = 0;
 //console.log(score)
function preload(){
  bImg = loadImage("blue block.png")
  pImg = loadImage("pink block.png")
  rImg = loadImage("red block.png")
  yImg = loadImage("yellow block.png")
  lImg = loadImage("lava.png")
  backImg = loadImage("bg3.jpg")
}

function setup() {
  createCanvas(800,400);

  back = createSprite(400,150,800,350)
  back.addImage(backImg)

  blueb = createSprite(100, 200, 50, 50);
  blueb.addImage(bImg)
  blueb.setCollider("rectangle",-7,-5,25,15)

 
 
 
  lava = createSprite(400, 370, 800, 60);
  
  lava.shapeColor = rgb(255,77,0)
  rgp = createGroup();
  pgp = createGroup();
  ygp = createGroup();
}

function draw() {


  
    back.velocityX = -5
    if(back.x === 0){
      back.x = back.width/2
    }
    blueb.velocityY = 2
   if(mousePressedOver(blueb)){
     blueb.velocityY =  blueb.velocityY-70
   }


  
   pinkBlocks();
   redBlocks();
   yellowBlocks();
  
   if(pgp.isTouching(blueb)){
     pgp.destroyEach();
    score = score + 50

   }
  
  
  background(0);   
  

  drawSprites();
  textSize(30)
   fill("yellow")
   text("Score :"+score ,550,50)

}
function pinkBlocks(){
  if(frameCount % 100 === 0){
    pinkb = createSprite(800,Math.round(random(15,300)), 50, 50);
    pinkb.addImage(pImg)
    pinkb.velocityX = -8
    pgp.add(pinkb)
    pinkb.setCollider("rectangle",4,5,30,28)

  }
}
function redBlocks(){
  if(frameCount % 130 === 0){
    redb = createSprite(800,Math.round(random(15,200)), 50, 50);
    redb.addImage(rImg)
    redb.scale = 2
    redb.velocityX = -8
    rgp.add(redb)
 
  }
}
function yellowBlocks(){
  if(frameCount % 150 === 0){
    yellowb = createSprite(800,Math.round(random(15,300)), 50, 50);
  yellowb.addImage(yImg)
  yellowb.scale = 0.6
    yellowb.velocityX = -8

  }
}