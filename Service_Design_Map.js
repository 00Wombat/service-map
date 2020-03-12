var page = 0;
let img1;
let img2;
let img3;
let img4;
var imgWidth;
var imgHeight;

function preload()
{
  img1 = loadImage('images/home.png');
  img2 = loadImage('images/ilise.png');
  img3 = loadImage('images/clara.png');
  img4 = loadImage('images/mark.png');
}

function setup() {
  createCanvas(1280, 1024);
  imgWidth = 1280;
  imgHeight = 1024;
}

function draw() {
  
  if(page==0)
    DrawPage1();
  if(page==1)
    DrawPage2();
  if(page==2)
    DrawPage3();
  if(page==3)
    DrawPage4();
}

function mousePressed()
{
  if(mouseY>428 && mouseY <473 && mouseX > 713 && mouseX < 772)
    page=1;
  else if(mouseY>546 && mouseY <604 && mouseX > 508 && mouseX < 557)
    page=2;
  else if(mouseY> 370 && mouseY < 408 && mouseX >607 && mouseX < 670)
    page=3;
  else
    page=0;
}

function DrawPage1()
{
  image(img1,0,0, imgWidth, imgHeight);
}

function DrawPage2()
{
  image(img2,0,0, imgWidth, imgHeight);
}

function DrawPage3()
{
  image(img3,0,0, imgWidth, imgHeight);
}

function DrawPage4()
{
  image(img4,0,0, imgWidth, imgHeight);
}
