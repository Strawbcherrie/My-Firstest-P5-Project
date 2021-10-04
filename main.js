function preload(){
    
}

function setup(){
    canva = createCanvas(600, 500);
    canva.position(550, 130);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0 , 20 , 500, 400);
    fill(250, 90, 141);
    stroke(57, 4, 0);
    square(0, 20, 35 );

    fill(255, 0, 64);
    stroke(57, 4, 0);
    circle(50, 35, 35);
    

    fill(250, 90, 141);
    stroke(57,4,0);
    square(65, 20, 35 );

    fill(255, 0, 64);
    stroke(57,4,0);
    circle(115, 35, 35);
    

    fill(250, 90, 141);
    stroke(57,4,0);
    square(130, 20, 35);

    fill(255, 0, 64);
    stroke(57,4,0);
    circle(180, 35, 35);
    

    







    fill(242, 73, 245);
    stroke(57,4,0);
    circle(340, 400, 35);
    

    fill(181, 7, 184);
    stroke(57,4,0);
    square(357, 385, 35 );

    fill(242, 73, 245);
    stroke(57,4,0);
    circle(410, 400, 35);
    

    fill(181, 7, 184);
    stroke(57,4,0);
    square(427, 385, 35);

    fill(242, 73, 245);
    stroke(57,4,0);
    circle(480, 400, 35);
    

    fill(181, 7, 184);
    stroke(57,4,0);
    square(465, 345, 35);

    fill(242, 73, 245);
    stroke(57,4,0);
    circle(480, 325, 35);


    fill(181, 7, 184);
    stroke(57,4,0);
    square(465, 273, 35);

    fill(242, 73, 245);
    stroke(57,4,0);
    circle(480, 255, 35);

    
    
    

    fill(255, 0, 64);
    stroke(57,4,0);
    circle(17, 75, 35);


    fill(250, 90, 141);
    stroke(57,4,0);
    square(0, 95, 35);

    fill(255, 0, 64);
    stroke(57,4,0);
    circle(17, 150, 35);


    fill(250, 90, 141);
    stroke(57,4,0);
    square(0, 170, 35);

    
}

function take_snapshot(){
    save("Welcome.png");
}