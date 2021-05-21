const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var ampm;



function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage ){
        background(backgroundimage);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    push ();
    textFont("Brush Script MT");
    textSize(30);
    fill(255, 222, 138);
    text("-Thushal",1100,600);
    pop();

    push();
    textFont("Bradley Hand ITC");
    textStyle(BOLD);
    fill(198, 109, 74);
    textSize(40);
    text ("SUNSRISE AND SUNSET",350,30);
    pop();

   
         if(hour < 12 && hour > 0){
            ampm = "AM";

            push ();
            textFont("Bradley Hand ITC");
            textStyle(BOLD);
            fill(198, 109, 74);
            textSize(40);
            text("Good  Morning",480,300);
            pop();

        }
        else {
            ampm = "PM";
           
            push ();
        textFont("Bradley Hand ITC");
        textStyle(BOLD);
        fill(198, 109, 74);
        textSize(40);
        text("Good  Evening",500,300);
        pop();

        };
        push();
        textSize(25);
        textFont("Ravie");
        fill(79, 14, 14);
        textSize(33);
        text("TIME : " + hour%12 + ampm,50,80);
        pop();
       }

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    j = await response.json();
    daytime = j.datetime;
    console.log(daytime);
    hour =  daytime.slice(11,13);
   
    if(hour>=04 && hour<=06 ){
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=11){
        bg = "sunrise3.png";
    }else if(hour>=11 && hour<13){
        bg = "sunrise4.png";
    }else if(hour>=13 && hour<15){
        bg = "sunrise5.png";
    }else if(hour>=15 && hour<17){
        bg = "sunrise6.png";
    }else if (hour>=17 && hour<=18){
        bg = "sunset7.png";
    }else if (hour>=18 && hour<=20){
        bg = "sunset8.png";
    }else if (hour>=20 && hour<=21){
        bg = "sunset10.png";
    }else if (hour>=21 && hour<=03){
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png";
    }
   backgroundimage = loadImage(bg);
    console.log(hour);

}