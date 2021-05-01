nosex= 0;
nosey= 0;
function preload()
{
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
    image(mustache,nosex,nosey,70,30);
}
function takeSnapshot()
{
 save('photo_booth_Image.png');
}
function modelLoaded()
{
    console.log('poseNet is initialized');
}
function gotPoses(results)
{
   if(results.length>0)
   {
       console.log(results);
       nosex=results[0].pose.nose.x-32;
       nosey=results[0].pose.nose.y;
   }
}