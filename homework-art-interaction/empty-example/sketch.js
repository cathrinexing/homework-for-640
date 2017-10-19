var posX = 0;
var posY = 0;
var bgColor;
var counter = 0;
var centerX = 0;
var centerY = 0;
var pics = [];
var targetPosX = [200, 500, 800];

var targetPosY = 120;
//var carrot;
//var xi;
//var la;
//var hitZoneX = 100;
//var hitZoneY = 100;



    





function setup() {
    createCanvas(1000, 1000); 
     pics[0]=loadImage("assets/carrot.png");
    pics[1] = loadImage("assets/xi.png");
    pics[2]=loadImage("assets/la.png");

  
   posX = width/2;
   posY = height/2;
        centerX = width / 2;
    centerY = height / 2;
        bgColor = color(163, 168, 167);


}

function draw() {
      background(bgColor);
    rectMode(CENTER);
    imageMode(CENTER);
    
    centerX= mouseX;
    centerY= mouseY;
    frameRate(5);
    stroke(0);
    strokeWeight(1);
    
     noStroke();
    
    //face
    push();
    fill("beige");
    ellipse(posX, posY, 250, 300);
    
   //eyes
    push();
   
   
    fill(255);
    ellipse(posX-60,posY-30, 80,90);
    ellipse(posX+60,posY-30, 80, 90);
    fill(0);
    ellipse(posX-60,posY-40, 30, 40);
    ellipse(posX+60,posY-40, 30, 40); 
     pop();
  
 
    //nose
       push();
    
    fill("yellow");
    triangle(posX,posY + 10,posX-20,posY + 65,posX+20,posY +65);
 
     pop(); 
     //hair
    stroke(0);
    noFill();
    arc(posX,posY,175,300, PI+QUARTER_PI, TWO_PI-QUARTER_PI);
    arc(posX,posY,200,300, PI, TWO_PI);
    arc(posX,posY,225,300, PI, TWO_PI);
    arc(posX,posY,250,300, PI, TWO_PI);
    arc(posX,posY,275,300, PI, TWO_PI);
    
         //mouse  
      arc(posX-10,posY+100,25,25, 0, PI);
     arc(posX+10,posY+100,25,25, 0, PI); 
    fill("pink");
    noStroke();
 ellipse(posX,posY+100, 30, 20);
     stroke("#937E57");
     strokeWeight(8);
    point(posX,posY + 100);
    
   //mole 
    stroke("#937E57");
    strokeWeight(5);
    point(posX + 80,posY + 10);
   
    
   //ears 
    push();
    translate(width/2, height/2);
    //rotate(PI/3.0);
    rotate(counter++);
    noStroke();
     fill("beige");
ellipse(-200, 20, 200, 70);
      fill("pink");
    ellipse(-200, 20, 100, 35);
    rotate(PI/3.0);
     fill("beige");
    ellipse(-200, -20, 200, 70);
      fill("pink");
      ellipse(-200, -20, 100, 35);
       pop();
       
     /*var hitZoneDist = dist(hitZoneX,hitZoneY,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist <= 5){
       console.log("We are totally in the zone!");
        image(carrot,0,0,200,200);
       }

    strokeWeight(1);
    ellipse(hitZoneX,hitZoneY, 10,10); */
    
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



function mousePressed() {
    bgColor = color(249, 245, 126);
}

function mouseReleased() {
    bgColor = color(253,221, 247);
}