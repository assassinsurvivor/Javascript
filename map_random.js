var temp=0;
var cir={
    x:0,
    y:5
};

function setup(){

    createCanvas(800,800);
}

function draw(){
    

    temp=map(cir.x,0,800,0,255)
    
    background(temp)


    stroke(0);
    fill(255,0,0);
    ellipse(cir.x,cir.y,cir.x+2,cir.y+2);
    cir.x+=1;
    cir.y+=1;
    


}


// can also use random(max,min) just for fun 