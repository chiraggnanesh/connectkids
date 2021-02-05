var backgroundImage;
var form;

function preload(){
    backgroundImage = loadImage("bg.png");
    logoImage = loadImage("logo.png")
}

function setup(){
    createCanvas(windowWidth-800, windowHeight-150);

    logo = createSprite(490, 60);
    logo.addImage(logoImage)

    form = new Form();
    form.display();
}

function draw(){
    background(backgroundImage);
    fill('black');
    text(mouseX+","+mouseY,mouseX, mouseY);

    drawSprites();
} 