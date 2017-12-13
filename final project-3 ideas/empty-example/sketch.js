var posX = 0;
var posY = 0;
var bgColor;

var pics = [];
var targetPosX = [100, 300, 500];

var targetPosY = 120;
//var carrot;
//var xi;
//var la;
//var hitZoneX = 100;
//var hitZoneY = 100;

  var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var b=[];
var numberBubbles=20;


 

function preload() {
    bgImage = loadImage("assets/park.jpg");
  
    bgImage2= loadImage("assets/forest.jpg");

}

function setup() {
    createCanvas(600, 600); 
     pics[0]=loadImage("assets/carrot.png");
    pics[1] = loadImage("assets/xi.png");
    pics[2]=loadImage("assets/la.png");
     
for(var g=0; g<numberBubbles; g++){
       b.push(new Bubble()); 
    
  }
  
   posX = width/2;
   posY = height/2;
       
        bgColor = color(163, 168, 167);

    bgChange = createButton("forest");
    bgChange.position(200, 500);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("park");
    bgChange2.position(400, 500);
    bgChange2.mousePressed(changeBgFunction2);
 currentBgImage = bgImage;
}

function draw() {
      background(bgColor);
    rectMode(CENTER);
    imageMode(CENTER);
    
       image(currentBgImage, 300, 300, 600, 600);
    posX = mouseX;
    posY = mouseY;
  
    frameRate(5);
    stroke(0);
    strokeWeight(1);
    
     noStroke();
  for (var g=0; g<b.length; g++){
       b[g].move();
       b[g].draw();
       

  if (mouseX > targetPosX[0] - 100 && mouseX < targetPosX[0] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[0], targetPosX[0], targetPosY);

    } 

    if (mouseX > targetPosX[1] - 100 && mouseX < targetPosX[1] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[1], targetPosX[1], targetPosY);

    } 

    if (mouseX > targetPosX[2] - 100 && mouseX < targetPosX[2] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[2], targetPosX[2], targetPosY);

    } 

}




    function changeBgFunction() {
    currentBgImage = bgImage2;
    console.log("loading bgimage2");
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}






function Bubble(){
   this.x=random (0,width);
   this.size= random (3,15);
   this.y=height+random(this.size*2,this.size*20);
   this.speed= 1;
  
}

Bubble.prototype.constructor=Bubble;
Bubble.prototype.move= function (){
       this.y-=this.speed;
  if (this.y<-this.size*2){
   this.y=height+random(this.size*2,this.size*20);
  } 
};

Bubble.prototype.draw=function(){
       fill(255,255,255,75);
      ellipse(this.x,this.y,this.size,this.size);
        
}





