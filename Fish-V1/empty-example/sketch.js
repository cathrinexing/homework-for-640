var posX = 0;
var posY = 0;
var b = [];
var numberBubbles = 20;
var bgImage0, bgImage, bgImage2;
var bgChange, bgChange2, bgChange3, bgChange4;
var currentBgImage;
var fishImage;
var orangeImage;
var peach;
var watermelon;
var banana;
var hitZoneX1 = 600;
var hitZoneY1 = 550;
var hitZoneX2 = 100;
var hitZoneY2 = 100;
var hitZoneX3 = 650;
var hitZoneY3 = 100;
var soundFile1, soundFile2, soundFile3;
var p = [];
var jelly;
var waterp;
var waterp1;
var randomFish = 0;
var interfaceItems = [];
var setRate = 30;



function preload() {
    // bgImage = loadImage("assets/mate.jpg");
    bgImage0 = loadImage("assets/b2.jpg");
    bgImage2 = loadImage("assets/seaw.jpg");
    fishImage = loadImage("assets/fish.png");
    peach = loadImage("assets/peach.png");
    orangeImage = loadImage("assets/orange.png");
    watermelon = loadImage("assets/watermelon.png");
    banana = loadImage("assets/banana.png");
    soundFile1 = loadSound("assets/back.mp3");
    soundFile2 = loadSound("assets/food.mp3");
    soundFile3 = loadSound("assets/heart.mp3");
    jelly = loadAnimation("assets/jellyfish0.png", "assets/jellyfish1.png");
    waterp = loadAnimation("assets/waterp0.png", "assets/waterp1.png");
    waterp1 = loadAnimation("assets/waterp2.png", "assets/waterp3.png");

}

function setup() {
    createCanvas(900, 700);
    interfaceItems.push(new interface(110, 610, 80, 25, color(255, 51, 153)));
    text("setting back", 110, 650);
    interfaceItems.push(new interface(310, 610, 80, 25, color(102, 153, 255)));
    text("animation", 310, 650);
    interfaceItems.push(new interface(510, 610, 80, 25, color(102, 153, 255)));
    text("animation", 310, 650);
    interfaceItems.push(new interface(710, 610, 80, 25, color(102, 153, 255)));
    text("animation", 310, 650);

    currentBgImage = bgImage2;

    noStroke();

    //adds 20 bubbles to the array
    for (var g = 0; g < numberBubbles; g++) {
        b.push(new Bubble());

    }
    //adds  3 random fish to the array
    for (var i = 0; i < 3; i++) {
        var pString = "assets/fishp" + i + ".png";
        var curFish = [];
        curFish[0] = random(100, 800);
        curFish[1] = random(100, 500);
        console.log(curFish[0]);
        curFish[2] = loadImage(pString);
        p.push(curFish);
    }

    //select the random fish as a target
    randomFish = int(random(p.length));
    jelly.stop();
    waterp.stop();
    waterp1.stop();
}


function draw() {
    background("lavender");
    frameRate(setRate);


    imageMode(CENTER);

    image(currentBgImage, 450, 300, 900, 600);



    //hero fish
    posX = mouseX;
    posY = mouseY;
    image(fishImage, posX, posY, 140, 80)
    noStroke();

    //eyes
    var wiggleX = map(mouseX, 0, width, -10, 10);
    fill(0);
    ellipse(posX + 50 + wiggleX, posY - 20, 10, 10);

    //animantion
    animation(jelly, 400, 350);
    animation(waterp, 200, 490);
    animation(waterp1, 550, 490);


    //    if (mouseIsPressed)
    //        jelly.play();
    //    else
    //        jelly.stop();

    //hitzones(food)
    var hitZoneDist1 = dist(hitZoneX1, hitZoneY1, mouseX, mouseY);

    if (hitZoneDist1 <= 30) {
        //console.log("We are totally in the zone!");
        image(orangeImage, 600, 550, 80, 80);
        setRate - 5;

        if (!soundFile2.isPlaying()) {
            soundFile2.setVolume(1);
            soundFile2.play();
        }


    }


    var hitZoneDist2 = dist(hitZoneX2, hitZoneY2, mouseX, mouseY);
    if (hitZoneDist2 <= 30) {
        //console.log("We are totally in the zone!");
        image(watermelon, 100, 100, 100, 100);
        soundFile2.setVolume(1);
        setRate + 5;

        if (!soundFile2.isPlaying()) {
            soundFile2.setVolume(1);
            soundFile2.play();
        }

    }
    var hitZoneDist3 = dist(hitZoneX3, hitZoneY3, mouseX, mouseY);
    if (hitZoneDist3 <= 30) {
        //console.log("We are totally in the zone!");
        image(banana, 650, 100, 100, 100);
        setRate + 5;
        if (!soundFile2.isPlaying()) {
            soundFile2.setVolume(1);
            soundFile2.play();
        }


    }

    strokeWeight(5);
    ellipse(hitZoneX1, hitZoneY1, 10, 10);
    ellipse(hitZoneX2, hitZoneY2, 10, 10);
    ellipse(hitZoneX3, hitZoneY3, 10, 10);

    //hitzones(target fish)


    var hitZoneDist0 = dist(p[randomFish][0], p[randomFish][1], mouseX, mouseY);
    console.log("randomFish: " + randomFish);

    if (hitZoneDist0 <= 30) {
        //      console.log("We are totally in the zone!");
        imageMode(CENTER);
        currentBgImage = bgImage0;
        image(peach, 600, 350, 200, 200);
        setRate = 60;
        waterp.play();
        jelly.play();
        waterp1.play();
        soundFile1.stop();
        if (!soundFile3.isPlaying()) {
            soundFile3.setVolume(1);
            soundFile3.play();
        }


    }


    //bubles show
    for (var g = 0; g < b.length; g++) {
        b[g].move();
        b[g].draw();

    }

    //fish show
    //    imageMode(CORNER);
    for (var i = 0; i < 3; i++) {
        image(p[i][2], p[i][0], p[i][1], p[i][2].width / 3, p[i][2].height / 3);
    }


    //interface button  
    interfaceItems[0].check();
    interfaceItems[0].display();
    interfaceItems[1].check();
    interfaceItems[1].display();
    interfaceItems[2].check();
    interfaceItems[2].display();
    interfaceItems[3].check();
    interfaceItems[3].display();



}



//bubble function
function Bubble() {
    this.x = random(0, width);
    this.size = random(3, 15);
    this.y = height + random(this.size * 2, this.size * 20);
    this.speed = 2;

}

Bubble.prototype.constructor = Bubble;
Bubble.prototype.move = function () {
    this.y -= this.speed;
    if (this.y < -this.size * 2) {
        this.y = height + random(this.size * 2, this.size * 20);
    }
};

Bubble.prototype.draw = function () {
    fill(255, 255, 255, 75);
    ellipse(this.x, this.y, this.size, this.size);

};

//button function

function mousePressed() {
    if (interfaceItems[0].check() == true) {
        currentBgImage = bgImage2;
        console.log("loading bgimage2");
        soundFile1.stop();
        soundFile2.stop();
        soundFile3.stop();
        jelly.stop();
        waterp.stop();
        waterp1.stop();
    }

    if (interfaceItems[1].check() == true) {
        setRate = 20;
        jelly.play();
        waterp.play();
        waterp1.play();
    }

    if (interfaceItems[2].check() == true) {
        soundFile1.play();
        soundFile1.setVolume(0.3)
        soundFile1.rate(0.8);
    }

    if (interfaceItems[3].check() == true) {
        soundFile1.stop();
        soundFile2.stop();
        soundFile3.stop();
    }
}

function interface(tempX, tempY, tempBoxSizeX, tempBoxSizeY, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize1 = tempBoxSizeX;
    this.boxSize2 = tempBoxSizeY;
    this.setFill = tempColor;
    this.overlay = false;

    this.display = function () {
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize1, this.boxSize2);

        if (this.overlay == true) {
            fill(0, 100);
            rect(this.x, this.y, this.boxSize1, this.boxSize2);
        }

    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize1) && mouseY > this.y && mouseY < (this.y + this.boxSize2)) {
            this.overlay = true;
            return true;
        } else {
            this.overlay = false;

            return false;
        }
    }
}
