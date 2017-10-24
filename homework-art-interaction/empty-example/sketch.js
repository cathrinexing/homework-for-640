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
 

function preload() {
    bgImage = loadImage("assets/park.jpg");
  
    bgImage2= loadImage("assets/forest.jpg");

}

function setup() {
    createCanvas(600, 600); 
     pics[0]=loadImage("assets/carrot.png");
    pics[1] = loadImage("assets/xi.png");
    pics[2]=loadImage("assets/la.png");

  
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
    
    //face
  
    fill("beige");
    ellipse(posX, posY, 250, 300);
    
    
  
   //eyes
      var wiggleX = map(mouseX, 0, width, -40, 40);
    
    fill(255);
    ellipse(posX-60,posY-30, 80,90);
    ellipse(posX+60,posY-30, 80, 90);
    fill(0);
    ellipse(posX-60+ wiggleX,posY-40, 30, 40);
    ellipse(posX+60+ wiggleX,posY-40, 30, 40); 

 
    //nose
    
    fill("yellow");
    triangle(posX,posY + 10,posX-20,posY + 65,posX+20,posY +65);
 
    
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
    translate(posX, posY);
    rotate(PI/3.0);
   
   // rotate(counter++);
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
    
    
       
 /*translate(width/2, height/2);
  rotate(PI/3.0);
    noStroke();
     fill("beige");
ellipse(posX-200, posY+20, 200, 70);
      fill("pink");
    ellipse(posX-200, posY+20, 100, 35);
    rotate(PI/3.0);
     fill("beige");
    ellipse(-200, -20, 200, 70);
      fill("pink");
      ellipse(-200, -20, 100, 35);
  
      */
      
      
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
    function changeBgFunction() {
    currentBgImage = bgImage2;
    console.log("loading bgimage2");
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}