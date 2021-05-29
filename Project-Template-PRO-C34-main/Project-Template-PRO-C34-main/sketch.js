const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10;
var box11, box12, box13,box14,box15,box16,box17,box18,box19,box20;
var hero,monster,rope,ground;
var backgroundImg
var bg
var background 

function preload() {

  bg = loadImage("gamingbackground2.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 200, y: 200 });
  monster = new Monster(1100,550,300);

  box1 = new Box(800, 100, 70, 70);
  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(900, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(800, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(900, 100, 70, 70);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  hero.display();
  rope.display();
  monster.display();


  Engine.update(engine);

  if(backgroundImg)
  background(backgroundImg);

  fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }






}

// To Make The hero Move
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
//To release The hero
function mouseReleased(){
  rope.fly()
}



      async function getBackgroundImg(){

        //  to fetch time from API
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
        //to change the data in JSON format
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime
        // to slice the datetime
        var hour = datetime.slice(11,13)
        // add conditions to change the background images from sunrise to sunset
        if (hour>=06&&hour<=19){
          bg = "sprites/gamingbackground1.jpg"
      
  
      }
     
      else{
        bg = "sprites/gamingbackground2.jpg"
    }
    backgroundImg = loadImage(bg)
    }
    