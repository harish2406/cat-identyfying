
status = "";
img = "";
function modelLoaded()
{
console.log("MODEL LOADED");
status = true;
objectDetector.detect(img, gotResult);

}


function setup()

{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('CocoSsd', modelLoaded);
document.getElementById("status").innerHTML = " status: Detecting Objects ";
}

function preload()
{
    img = loadImage('dog_cat.jpg');

}

function draw()
{
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("dog", 45, 75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);

fill("#FF0000");
text("Cat", 320, 95);
noFill();
stroke("#FF0000");
rect(300,70,270,320);
}
 


function gotResult(error, result)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(result);
    }
}