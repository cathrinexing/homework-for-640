var interfaceItems = [];

var brushSize = 10;
var brushColor = 125;


function setup() {
    createCanvas(1000, 600);

    interfaceItems.push(new interface(50, 100, 30, color(255, 51, 153)));
    interfaceItems.push(new interface(100, 100, 30, color(102, 153, 255)));
    interfaceItems.push(new interface(50, 150, 30, color(255, 204, 255)));
    interfaceItems.push(new interface(100, 150, 30, color(153, 204, 255)));
}

function draw() {

    fill(brushColor);
   ellipse(mouseX, mouseY, brushSize, brushSize);

    interfaceItems[0].display();
    interfaceItems[1].display();
    interfaceItems[2].display();
    interfaceItems[3].display();
    interfaceItems[0].check();
    interfaceItems[1].check();
    interfaceItems[2].check();
    interfaceItems[3].check();

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
        brushColor ="black";
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
