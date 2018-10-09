function setup() {

	createCanvas(400, 200);

}


function draw() {
	
	
	//noFill();
	//noStroke();

	background(100);
	strokeWeight(2); // width of the outline
	stroke(0,0,0); // outline color
	line(0, 0, 200, 85,);
	line(400,0,200,85);
	rectMode(CENTER);
	fill(255,0,0,255); // within shape color,4th argument is opacity
	stroke(0,0,255);
	rect(200,100, 71, 58); // x_cord,y_cord,width,height

}