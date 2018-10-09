function setup() {

	createCanvas(800, 800);
	background(100);	
	

}


function draw() {
	
	strokeWeight(2); // width of the outline
	stroke(0,0,0); // outline color
	
	ellipse(mouseX,mouseY, 71, 58); // x_cord,y_cord,width,height

}

function mousePressed() {
	
	background(100);
}