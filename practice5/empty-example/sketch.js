var interfaceItems = [];

var brushSize = 10;
var brushColor = (0, 0, 0);
var brushShape = true;

function setup() {
    createCanvas(1000, 600);

    interfaceItems.push(new interface(50, 100, 30, color(255, 51, 153)));
    text("Size+", 35, 130);
    interfaceItems.push(new interface(100, 100, 30, color(102, 153, 255)));
    text("Size-", 85, 130);
    interfaceItems.push(new interface(50, 150, 30, color(255, 192, 203)));
    interfaceItems.push(new interface(100, 150, 30, color(255, 255, 0)));
    interfaceItems.push(new interface(150, 150, 30, color(230, 230, 250)));
    interfaceItems.push(new interface(200, 150, 30, color(125, 125, 125)));
    text("pink", 40, 180);
    text("yellow", 85, 180);
    text("lavender", 130, 180);
    text("gray", 190, 180);
    text("rect", 40, 225);
    text("ellipse", 85, 225);
    interfaceItems.push(new interface(50, 200, 30, color(127, 255, 170)));
     interfaceItems.push(new interface(100, 200, 30, color(135, 206, 235)));
    
}

function draw() {

    fill(brushColor);
      if(brushShape == true){
    ellipse(mouseX, mouseY, brushSize, brushSize);
    }else{
    rect(mouseX, mouseY, brushSize, brushSize)
    }
    interfaceItems[0].display();
    interfaceItems[1].display();
    interfaceItems[2].display();
    interfaceItems[3].display();
    interfaceItems[4].display();
    interfaceItems[5].display();
   interfaceItems[6].display();
    interfaceItems[7].display();
    interfaceItems[0].check();
    interfaceItems[1].check();
    interfaceItems[2].check();
    interfaceItems[3].check();
    interfaceItems[4].check();
    interfaceItems[5].check();
  interfaceItems[6].check();
     interfaceItems[7].check();
}

function mousePressed() {

    if (interfaceItems[0].check() == true) {
        brushSize++;
    }

    if (interfaceItems[1].check() == true) {
        brushSize--;
    }
    if (interfaceItems[2].check() == true) {
        brushColor = "pink";
    }
    if (interfaceItems[3].check() == true) {
        brushColor = "yellow";

    }
    if (interfaceItems[4].check() == true) {
        brushColor = "lavender";
    }
    if (interfaceItems[5].check() == true) {
        brushColor = (125, 125, 125);
    }
  if (interfaceItems[6].check() == true) {
        brushShape =false;
    }
    if (interfaceItems[7].check() == true) {
        brushShape = true;
    }
}

function interface(tempX, tempY, tempBoxSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill = tempColor;
    this.overlay = false;

    this.display = function () {
        noStroke();
        fill(this.setFill);
        ellipse(this.x, this.y, this.boxSize, this.boxSize);

        if (this.overlay == true) {
            fill(0, 100);
            ellipse(this.x, this.y, this.boxSize, this.boxSize);
        }

    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            this.overlay = true;
            return true;
        } else {
            this.overlay = false;

            return false;
        }
    }
}