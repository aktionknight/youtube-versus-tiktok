const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/youtube_vs_tiktok.jpg");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    

    bird = new Bird(200,50);
  

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:220, y:120});
}

function draw(){
   
    background(backgroundImg);
       
noStroke();
textSize(35);
fill ("white");

text("score :" + score,1000,50)

rect(600,200,20,400);

rect(600,200,20,400);
stroke("black")
text("if u are with youtube , defeat AMIR SIDDIQUI !!!",200,30)
text
textSize(20)

    Engine.update(engine);
    //strokeWeight(4);
    slingshot.display();  
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    

    bird.display();
    platform.display();
    //log6.display();
      


pig1.score();
pig3.score();






}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

