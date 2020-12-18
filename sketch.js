 //============================================
// Sketch File 
//============================================

let goldFish;
let food;
let clientWidth, clientHeight;
let speedSlider, accelerationSlider, foodSlider; 


function windowResized() {
	console.log("resized");
	clientHeight = document.getElementById('window').clientHeight;
	clientWidth = document.getElementById('window').clientWidth;
	resizeCanvas(clientWidth, clientHeight);
}


function setup() {
	
	// Window Detection
	clientHeight = document.getElementById('window').clientHeight;
	clientWidth = document.getElementById('window').clientWidth;
	
	// Creating Canvas
	canvas = createCanvas (clientWidth, clientHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-10');
	
	// Creating Sliders
	// speedSlider = createSlider(0,10,7,.5);
	// speedSlider.position(20,40);
	// accelerationSlider = createSlider(0,4,3,.1);
	// accelerationSlider.position(20,85);
	foodSlider = createSlider(2,10,.1);
	foodSlider.position(20,125);
	// Background Color
	background(0);

	// Creating an instance of the Fish object
	goldFish = new Fish();
}


  
function draw() {
	//Redraw Background Color (Necessary?)
	background(0);

	if (food) {
		let f = food.calculateAttraction(goldFish); // will return a vector
		goldFish.applyForce(f); // Apply the attraction force to the goldfish
		food.display();

	}


	
	goldFish.update();
	goldFish.checkEdges();
	goldFish.display();

	//Text for Sliders 
	// fill(255);
	// textSize(16);
	// text('Top Speed', 20, 30);
	// fill(255);

	// textSize(16);
	// text('Acceleration Magnitude', 20, 75);
	// fill(255);
	
	fill(255);
	textSize(16);
	text('Food Size', 20, 120);
	fill(255);
}

function mouseClicked(){
	food = new Food(mouseX, mouseY);
}


