class Tail {
  constructor(fishRadius){
    // In order to draw a triangle for the tail
    // I need to tell p5 where to draw the three points for the triangle
    // I'm using polar coordinates to set the x & y location so that 
    // I can easly have the tail "wag" back and forth 
    // x = r * cos(theta), y = r * sin(theta)

    // In my case i'm still not sure what value of theta to use to actually draw it in the right location but we shall see
    this.theta = 0;
    this.fishRadius = fishRadius;
    //this.period = this.fishVelocity;
    this.period = 60;

    // Points of the triangle 
    // this.tx1 = -fishRadius * cos(this.theta);
    // this.ty1 = fishRadius * sin(this.theta);

    // this.tx2 = -(this.tailLength + 15) * cos(this.tailAngle);
    // this.ty2 = (this.tailLength) * sin(this.tailAngle);

    // this.tx3 = -(this.tailLength) * cos(-this.tailAngle);
    // this.ty3 = -(this.tailLength) * sin(-this.tailLength);

    this.tx1 = -this.fishRadius * cos(this.theta);
    this.ty1 = this.fishRadius * sin(this.theta);
  
    this.tx2 = -(this.fishRadius*2) * cos(this.theta + PI/8);
    this.ty2 = (this.fishRadius*2) * sin(this.theta + PI/8);
  
    this.tx3 = -(this.fishRadius*2) * cos(-this.theta + PI/8);
    this.ty3 = -(this.fishRadius*2) * sin(-this.theta + PI/8);

    console.log(this.tx1,this.ty1,this.tx2,this.ty2,this.tx3,this.ty3);
  }

  swim(fishVelocity) { 
    // The code in here will calculate a new theta, which is basically where the 
    // tail will be positioned,
    // in order to do this it will need the velocity of the fish
    console.log(fishVelocity);
    if (fishVelocity != 0){
     this.period = 40/fishVelocity;
    console.log(fishVelocity);
    } else {
       this.period = 60;
      console.log(fishVelocity);
    }

    this.theta = PI/8 * cos(2*PI * (frameCount/this.period));
    this.tx1 = -this.fishRadius * cos(this.theta);
    this.ty1 = this.fishRadius * sin(this.theta);
    this.tx2 = -(this.fishRadius*2) * cos(this.theta + PI/8);
    this.ty2 = (this.fishRadius*2) * sin(this.theta + PI/8);
    this.tx3 = -(this.fishRadius*2) * cos(-this.theta + PI/8);
    this.ty3 = -(this.fishRadius*2) * sin(-this.theta + PI/8);
  }

  draw() {
    fill(255,100,25);
    triangle(this.tx1, this.ty1, this.tx2, this.ty2, this.tx3, this.ty3,);
  }

  setTrianglePoints(){

  }
}
