var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")
var keyPress

var backgroundImage = "mars.jpg"
var roverImage = "rover.png"

var roverX = 10
var roverY = 10

var roverWidth = 100
var roverHeight = 100

var backgroundImageTag,roverImageTag

function loadFN(){
    backgroundImageTag=new Image()
    backgroundImageTag.onload=uploadBackgroundFN
    backgroundImageTag.src=backgroundImage
    roverImageTag=new Image()
    roverImageTag.onload=uploadroverFN
    roverImageTag.src=roverImage
}

function uploadBackgroundFN(){
ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height)
}

function uploadroverFN(){
    ctx.drawImage(roverImageTag,roverX,roverY,roverWidth,roverHeight)
}

window.addEventListener("keydown",keydownFN)

function keydownFN(e){
  keyPress=e.keyCode  
  console.log(keyPress)
}


window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=98)
{
alphabetkey();
document.getElementById("d1").innerHTML="You pressed Alphabet Key";
console.log("alphabet key");


function alphabetkey()
{
img_image="Alpkey.png";
add();
}


