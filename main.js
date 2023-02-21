difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    canvas = createCanvas(550, 550);
    canvas.position (900, 150);

    video = createCapture(VIDEO);
    video.size (550, 500);
    video.position (300, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet model has been initiated');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw(){
    background("#fdcb6e");
    fill ('#0984e3');
    text('Neha', 50, 400);
    textSize(difference)
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
}
