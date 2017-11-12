var posX = 0;
var posY = 0;

function setup() {
    createCanvas(1000, 1000); 
    background("grey");
  

   posX = width/2;
   posY = height/2;


}

function draw() {

    stroke(0);
    strokeWeight(1);
    
     noStroke();
    
    
    fill("beige");
    ellipse(posX, posY, 250, 300);
   
    fill(255);
    ellipse(posX-60,posY-30, 80,90);
    ellipse(posX+60,posY-30, 80, 90);
    fill(0);
    ellipse(posX-60,posY-40, 30, 40);
    ellipse(posX+60,posY-40, 30, 40);   
    fill("yellow");
    triangle(posX,posY + 10,posX-20,posY + 65,posX+20,posY +65);
    
     
     stroke(0);
    noFill();
    arc(posX,posY,175,300, PI+QUARTER_PI, TWO_PI-QUARTER_PI);
    arc(posX,posY,200,300, PI, TWO_PI);
    arc(posX,posY,225,300, PI, TWO_PI);
    arc(posX,posY,250,300, PI, TWO_PI);
    arc(posX,posY,275,300, PI, TWO_PI);
      
      arc(posX-10,posY+100,25,25, 0, PI);
     arc(posX+10,posY+100,25,25, 0, PI);
     
    fill("pink");
    noStroke();
 ellipse(posX,posY+100, 30, 20); 
    
    stroke("#937E57");
    strokeWeight(5);
    point(posX + 80,posY + 10);
    strokeWeight(8);
    point(posX,posY + 100);
    
    noStroke();
     fill("beige");
translate(width/2, height/2);
rotate(PI/3.0);
ellipse(-200, 20, 200, 70);
      fill("pink");
    ellipse(-200, 20, 100, 35);
    rotate(PI/3.0);
     fill("beige");
    ellipse(-200, -20, 200, 70);
      fill("pink");
      ellipse(-200, -20, 100, 35);
    
     

}