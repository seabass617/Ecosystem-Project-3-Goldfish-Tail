class Fish {
	
	constructor(){
		this.location = new createVector(random(clientWidth), random(clientHeight));
		this.velocity = new createVector(0,0);
		this.acceleration = new createVector(0,0);
    this.mass = 1;
    this.topspeed = 5;
    this.angle = this.velocity.heading();
    this.fishRadius = 10;
    this.tail = new Tail(this.fishRadius);

		this.xoff = 0; 
    this.yoff = 1000;
	}

	update(){
		//let mouse = new createVector(mouseX, mouseY);
    
    // If there have been no clicks detected, meander

    // If there is a click detected, acceleration is equal to zero (Might already be done)
    // Be attracted by the click

    // If the mouse isn't on the screen 
    // if (((mouse.x == 0) || (mouse.y == 0)) || ((mouse.x == width -1) || (mouse.y == height-1))) {
		// 	this.topspeed = 1;

		// 	this.acceleration.x = map(noise(this.xoff),0,1,-3,3);
    //   this.acceleration.y = map(noise(this.yoff),0,1,-3,3);
    //   // Take the next step through our perlin field
    //   this.xoff += 0.01;
		// 	this.yoff += 0.01;
			
    // }
    // else {
    
    //   this.topspeed = speedSlider.value();
    //   // else, just meander
    //   // Calculate the vector between location and mouse
    //   let direction = p5.Vector.sub(mouse,this.location);
    //   // Normalize vector so that you can scale
    //   direction.normalize();
		// 	// Scale 
		// 	let scaleFactor = accelerationSlider.value();
    //   direction.mult(scaleFactor);
    //   // Assign to my acceleration
		// 	this.acceleration = direction;
			
    // }

    //this.topspeed = speedSlider.value();
 
    //let scaleFactor = accelerationSlider.value();
    let scaleFactor = 1;
    this.acceleration.mult(scaleFactor);

		this.velocity = this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location = this.location.add(this.velocity);
    //console.log(this.velocity.mag());
    this.tail.swim(this.velocity.mag());
    
    // Ensure that you acceleration isn't accumulating over time 
    this.acceleration.mult(0);
	}

	display(){

    this.drawBody();
  }
  
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  drawBody(){
    // atan2(this.velocity.y, this.velocity.x)
    // Angle is defined and set by the attractor
    // Which doesn't actually make any sense if the fish is just wandering... 
    // You still want it to point in it's direction of movement, maybe we can create a function called wander,
    // If there is no food, then wander, else, don't wander... Yup and that's back in the draw function
    if (this.velocity.heading() != 0) {
      this.angle = this.velocity.heading();
    }

    noStroke();
    fill(255,100,25);
    push();
    ellipseMode(CENTER);
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    //console.log(this.angle);
    ellipse(0, 0, this.fishRadius*2, this.fishRadius*2);
    fill(255);
    this.tail.draw();
    //triangle(-this.fishRadius, 0, -this.fishRadius - 7, 5, -this.fishRadius - 7, -5,);
    pop();
  }

	checkEdges(){
		if (this.location.x > clientWidth) {
      this.location.x = 0;
    }
    else if (this.location.x < 0) {
      this.location.x = clientWidth;
    }
    
    
    if (this.location.y > clientHeight) {
      this.location.y = 0;
    }
    else if (this.location.y < 0) {
      this.location.y = clientHeight;
    }

  }
  

}