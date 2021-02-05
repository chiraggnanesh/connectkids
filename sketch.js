var backgroundImage;
var form;

function preload(){
    backgroundImage = loadImage("bg.png");
    logoImage = loadImage("logo.png");
    chatBackgroundImage = loadImage("connectKidsBackground.png")
}

function setup(){
    createCanvas(windowWidth-800, windowHeight-150);

    logo = createSprite(490, 60);
    logo.addImage(logoImage)

    chatBackground = createSprite(520,500);
    chatBackground.addImage(chatBackgroundImage);
    chatBackground.visible = false;

    form = new Form();
    form.display();
}

function draw(){
    background(backgroundImage);
    fill('black');
    text(mouseX+","+mouseY,mouseX, mouseY);

    drawSprites();
} 