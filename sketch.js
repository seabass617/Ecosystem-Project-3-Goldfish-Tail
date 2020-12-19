//====================================================================================
//  Main Sketch File
//====================================================================================

//Declare global variables
let fishes = new Array(100);
let food;
let clientWidth, clientHeight;
let foodSlider; 

//===================================================================================
// Responsiveness
//===================================================================================
function windowResized() {
	console.log("resized");
	clientHeight = document.getElementById('window').clientHeight;
	clientWidth = document.getElementById('window').clientWidth;
	resizeCanvas(clientWidth, clientHeight);
}

//===================================================================================
// Main Setup Function: Initialize Variables
//===================================================================================
function setup() {
	
	// Window Detection
	clientHeight = document.getElementById('window').clientHeight;
	clientWidth = document.getElementById('window').clientWidth;
	
	// Creating Canvas
	canvas = createCanvas (clientWidth, clientHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-10');
	
	// Creating Slider
	foodSlider = createSlider(2,10,.1);
	foodSlider.position(20,125);
	
	// Background Color
	background(0);

	// Creating an instance of the Fish object
	//goldFish = new Fish();

	for (let i = 0; i < fishes.length; i++) {
		fishes[i] = new Fish();
	}

}

//===================================================================================
// Main Draw Function: Repeated Every Frame
//===================================================================================
function draw() {
	//Redraw Background Color (Necessary?)
	background(0);

	for (let i = 0; i < fishes.length; i++){ 
		// If there is food on the screen, apply attractive force and display food
		if (food) {
			let f = food.calculateAttraction(fishes[i]); 
			fishes[i].applyForce(f); 
			food.display(); 
		} else {
			fishes[i].meander();
		}

		// Update the properties of the fish (acceleration, velocity, location) etc
		// And display the fish
		fishes[i].update(); 
		fishes[i].checkEdges();
		fishes[i].display();
	}

	// Text for slider	
	fill(255);
	textSize(16);
	text('Food Size', 20, 120);
	fill(255);
}

//===================================================================================
// Mouse Click Function
//===================================================================================
function mouseClicked(){
	// Create food item at mouse click 
	food = new Food(mouseX, mouseY);
}


