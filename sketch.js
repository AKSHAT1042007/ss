var background1,bullet,bulletGroup;
var bg,laser,spaceship2;
var gameState = 0;
var health=100
var healthbar;
var score=0
var bulletGrp;
var bullet1
 var player,playerCount,allPlayers;
 var bgImg,laserImgImg,spaceship2Img,laserImg2;
 var form,game,player;
 var comet,cometImg;

function preload(){
bgImg = loadImage("images/bg.png")
laserImg = loadImage("images/laser.jpg")
spaceship2Img = loadImage("images/spaceship2.png") 
cometImg = loadImage("images/meteor.png")
}

function setup() {
 createCanvas(displayWidth,displayHeight-90);
 background1 = createSprite(displayWidth-50,displayHeight)
 background1.addImage(bgImg)
 background1.scale = 2.3

 spaceship2 = createSprite(displayWidth/2-500,displayHeight/2)
 spaceship2.addImage(spaceship2Img)
 spaceship2.scale = 0.35;
 bulletGrp = new Group();
 healthbar = createSprite(windowWidth/2 + 100, 40, 100, 20);
 healthbar.shapeColor = "red";
spaceship2.debug=true
laser1 = createSprite(displayWidth/2+50,displayHeight)
laser1.addImage(laserImg)
laser1.scale = 0.1
laser1.visible = false


}

function draw() {
 background(0)
 console.log(healthbar.width)

  

           if(keyDown("D")){
             spaceship2.x = spaceship2.x+3;
             }
            
               if(keyDown("A")){
                 spaceship2.x = spaceship2.x-3;
                 }
                 if(keyDown("W")){
                   spaceship2.y = spaceship2.y-4;
                   }
                   if(keyDown("S")){
                     spaceship2.y= spaceship2.y+4;
                     }
 background1.velocityX = -4
                  
 if(background1.x<200){
background1.x =  width/2
 }    

  


 if(keyDown("space")){
  for(var i = 0 ; i<5 ; i++){
   bullet =createSprite(i,spaceship2.y, 5, 10);
bullet.velocityX=5
   //bullet.setSpeedAndDirection(8,.rotation - 90);
//bullet.rotation =.rotation - 90;
   bullet.lifeTime = 100;
   bullet.addImage(laserImg);
   bullet.scale = 0.2;
bulletGrp.add(bullet);
//bulletGrp.add(bullet1);
   //shootingSound.play();
 }
}



if(bulletGrp.isTouching(comet)){
//health=health-5;
 //healthbar.width=health
 //healthbar.x=windowWidth/2+50+health/2
 comet.destroy()
 bulletGrp.destroyEach()
 score+=1
}

if(health<=0){
 health=0
}
 drawSprites()
 text("score"+score,50,50)
 text (" Health% "+health,800,50)

}
function meteor(){
  if(frameCount % 50===0){
    comet = createSprite(displayWidth,displayHeight/2)
    comet.addImage(cometImg)
    comet.velocityX = -4
}
}
