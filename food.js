class Food {
  // What data does it have?
  
  constructor(x,y) {
    this.location = createVector(x,y);
    this.mass = foodSlider.value();
    this.scaleFactor = 1; 
  }

  // What can it do?

  display(){
    noStroke();
    fill(245,172,114);
    ellipse(this.location.x, this.location.y, this.mass * 5, this.mass * 5)
  }

  update(){

  }

  calculateAttraction(fish){
    // here we will caculate the attraction force, which will function similar to gravity except that attractive force will remain constant (otherwise it will overshoot)
    
    // Subtract location 
    let force = p5.Vector.sub(this.location, fish.location);

    // Is distance relevant for how this force works? 
    let distance = force.mag();
    
    
 
    
    // Stop when we get to the food
    if (distance <= 20) {
      // If we are within 10 pixels of our food then we make our force equal to zero
      // Set the objects velocity equal to zero, so it stops
      //fish.angle = fish.velocity.heading();
      force.mult(0);
      fish.velocity.mult(0);
    }

    // Make it so that the topspeed is proportional to the top speed 
    fish.topspeed = this.mass;
    fish.topspeed = constrain(fish.topspeed,1,10)
    //console.log(fish.topspeed);
    // The larger the mass, the greater topspeed you can have
    // The smaller the mass, the slower topspeed
    // constrain it so that it's never too small or too large 

    
    
    
    // Get unit vector 
    force.normalize(); 
    
    // Scale vector (Should this be a constant?)
    let strength = (this.scaleFactor * this.mass *  fish.mass * distance);
    force.mult(strength);


  

    // Return vector so that it can be applied to 
    return force;
  }
}