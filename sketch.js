const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(840,290,20,120);
    box2 = new Box(920,340,180,20);
    box3 = new Box(1000,290,20,120);
    paper = new Ball(200,100,20,20);
    ground = new Ground(width/2,360,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    paper.display();
    box3.display();
    box2.display();
    box1.display();
    ground.display();
}
function keyPressed(){
 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:72,y:-72});
 }
}