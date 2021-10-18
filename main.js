var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

roverWidth=100;
roverHeight=100;

background_image="mars.jpg";

rover_image="rover.png";

roverX=0;
roverY=450;

function Show(){
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_image;

    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image; 
}

function uploadbg(){
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", keyborad);

function keyborad(e){

    keypressed=e.keyCode;
    console.log(keypressed); 

    if(keypressed=="38"){
        up();
    }

    if(keypressed=="40"){
        down();
    }

    if(keypressed=="39"){
        right();
    }

    if(keypressed=="37"){
        left();
    }

}

function up(){
    roverY=roverY-10;
    uploadbg();
    uploadrover();
}

function down(){
    roverY=roverY+10;
    uploadbg();
    uploadrover();
}

function right(){
    roverX=roverX+10;
    uploadbg();
    uploadrover();
}

function left(){
    roverX=roverX-10;
    uploadbg();
    uploadrover();
}