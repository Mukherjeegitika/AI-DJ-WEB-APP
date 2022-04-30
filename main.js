song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function preload()
{
    song = loadSound("music.mp3");
}

function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(result)
{
    if(result.lenght > 0)
    {
    console.log(results);
    scoreRighttWrist= results[0].pose.keypoints[10].score;
    scoreLefttWrist= results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist="+ scoreRighttWrist + "scoreLeftWrist="+ scoreLeftWrist);

    leftWristX= results[0].pose.leftWrist.x;
    leftWristY= results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY"+ leftWristY)

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+ rightWristX+"rightWristY ="+ rightWristY);
   }


function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("FF0000");

    if(scoreRighttWrist > 0.2)
    {
    circle(rightWristX,rightWristY,20);

    if(rightWristY >0 && rightWrist <= 100)
    {
        document.getElementById("speed").innerHTML = "Speed = 0.5x";
        song.rate(0.5);
    }
    else if(ridhtWristY >100 && rightWristY <=200)
     {
         document.getElementById("speed").innerHTML = "Speed =1x";
         song.rate(1);
     }
     else if(ridhtWristY >200 && rightWristY <=300)
     {
         document.getElementById("speed").innerHTML = "Speed =1.5x";
         song.rate(1.5);
     }
     else if(ridhtWristY >300 && rightWristY <=400)
     {
         document.getElementById("speed").innerHTML = "Speed =2x";
         song.rate(2);
     }
     else if(ridhtWristY >400 && rightWristY <= 500)
     {
         document.getElementById("speed").innerHTML = "Speed =1x";
         song.rate(1);
     }
    if(scoreLeftWrist > 0.2)
    {

    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML= "Volume =" + volume;
    song.setvolume(volume);
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
}
}


