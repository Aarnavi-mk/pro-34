const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage, monsterImage1, monsterImage2,superheroImage1
function preload() {
//preload the images here
backgroundImage = loadImage("img/GamingBackground.png")
//monsterImage1 = loadImage("img/Monster-01.png")
//monsterImage2 = loadImage("img/Monster-02.png")
//superheroImage1 = loadImage("img/Superhero-01.png")
//superheroImage2 = loadImage("img/Superhero-02.png")
}

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(20,700,1500,20)
  hero = new Hero(100,700,200,200)
  rope  = new Fly(hero.body,{x:200,y:20})
  monster = new Monster(700,300,50,50)
  b1 = new Block(500,350,50,50)
  b2 = new Block(500,300,50,50)
  b3 = new Block(500,250,50,50)
  b4 = new Block(500,200,50,50)
  b5 = new Block(500,150,50,50)
 b6 = new Block(500,100,50,50)
b7 = new Block(550,350,50,50)
b8 = new Block(550,300,50,50)
b9 = new Block(550,250,50,50)
b10 = new Block(550,200,50,50)

b11 = new Block(600,350,50,50)
b12 = new Block(600,300,50,50)
b13 = new Block(600,250,50,50)
b14 = new Block(600,200,50,50)
b15 = new Block(600,150,50,50)
b16 = new Block(600,100,50,50)
b17 = new Block(600,50,50,50)
b18 = new Block(650,350,50,50)
b19 = new Block(650,300,50,50)
b20 = new Block(650,250,50,50)




}

function draw() {
  background(backgroundImage,300,300);
 Engine.update(engine);
 ground.display();
 hero.display();
rope.display();
monster.display()
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()
b17.display()
b18.display()
b19.display()








}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}