let secondsRadius;
let grass1;
let grass2;
let grass3;
let grass4;
let grass5;
let pinkflower;
let yellowflower;
let shore;
let turtle1;
let turtle2;
let turtle3;

// Load the image and create a p5.Image object.
function preload() {
  grass1 = loadImage('https://celsch34.github.io/grass_1.png');
  grass2 = loadImage('https://celsch34.github.io/grass_2.png');
  grass3 = loadImage('https://celsch34.github.io/grass_3.png');
  grass4 = loadImage('https://celsch34.github.io/grass_4.png');
  grass5 = loadImage('https://celsch34.github.io/grass_5.png');
  pinkflower = loadImage('https://celsch34.github.io/pinkflower.png');
  yellowflower = loadImage('https://celsch34.github.io/yellowflower.png');
  shore = loadImage('https://celsch34.github.io/shore.png');
  turtle1 = loadImage('https://celsch34.github.io/turtle1.png');
  turtle2 = loadImage('https://celsch34.github.io/turtle2.png');
  turtle3 = loadImage('https://celsch34.github.io/turtle3.png');
}

// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
  
  angleMode(DEGREES);
  
  // Set radius for each shape based on canvas dimensions
  let radius = 400;
  secondsRadius = radius * 0.71;
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background('#AAEAFF');
    image(shore,0, 535);
    shore.resize(800, 70);
  
/*  //see clock in numbers:
    textSize(12);
    fill(180);
    text(hr, 10, 30);
    fill(100);
    text(min, 10, 60);
    fill(0);
    text(sec, 10, 90); */
    
 
  // Move origin to center of canvas
  translate(width / 1.2, height / 5);
  
  //draw sun circle
  fill('#FDA100');
  noStroke();
  circle(0,0,150);
  
  
  //SUN RAYS/SECONDS MOTION------------------------------------------------------
  
    if (sec >= 1) {
      //calculate angle for seconds hand:
      let secondAngle = map(1, 0, 60, 0, 360);
      // draw seconds hand:
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}

    if (sec >= 2) {
      let secondAngle = map(2, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
  
    if (sec >= 3) {
      let secondAngle = map(3, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
  
  if (sec >= 4) {
      let secondAngle = map(4, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 5) {
      let secondAngle = map(5, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 6) {
      let secondAngle = map(6, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 7) {
      let secondAngle = map(7, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 8) {
      let secondAngle = map(8, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 9) {
      let secondAngle = map(9, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 10) {
      let secondAngle = map(10, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 11) {
      let secondAngle = map(11, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 12) {
      let secondAngle = map(12, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 13) {
      let secondAngle = map(13, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 14) {
      let secondAngle = map(14, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 15) {
      let secondAngle = map(15, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 16) {
      let secondAngle = map(16, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 17) {
      let secondAngle = map(17, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 18) {
      let secondAngle = map(18, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 19) {
      let secondAngle = map(19, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 20) {
      let secondAngle = map(20, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 21) {
      let secondAngle = map(21, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 22) {
      let secondAngle = map(22, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 23) {
      let secondAngle = map(23, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 24) {
      let secondAngle = map(24, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 25) {
      let secondAngle = map(25, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 26) {
      let secondAngle = map(26, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 27) {
      let secondAngle = map(27, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 28) {
      let secondAngle = map(28, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 29) {
      let secondAngle = map(29, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 30) {
      let secondAngle = map(30, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 31) {
      let secondAngle = map(31, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 32) {
      let secondAngle = map(32, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 33) {
      let secondAngle = map(33, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 34) {
      let secondAngle = map(34, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 35) {
      let secondAngle = map(35, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 36) {
      let secondAngle = map(36, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 37) {
      let secondAngle = map(37, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 38) {
      let secondAngle = map(38, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 39) {
      let secondAngle = map(39, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 40) {
      let secondAngle = map(40, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 41) {
      let secondAngle = map(41, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 42) {
      let secondAngle = map(42, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 43) {
      let secondAngle = map(43, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 44) {
      let secondAngle = map(44, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 45) {
      let secondAngle = map(45, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 46) {
      let secondAngle = map(46, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 47) {
      let secondAngle = map(47, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 48) {
      let secondAngle = map(48, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 49) {
      let secondAngle = map(49, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 50) {
      let secondAngle = map(50, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 51) {
      let secondAngle = map(51, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 52) {
      let secondAngle = map(52, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 53) {
      let secondAngle = map(53, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 54) {
      let secondAngle = map(54, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 55) {
      let secondAngle = map(55, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 56) {
      let secondAngle = map(56, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 57) {
      let secondAngle = map(57, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 58) {
      let secondAngle = map(58, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 59) {
      let secondAngle = map(59, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
if (sec >= 0) {
      let secondAngle = map(0, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
   
  
  //FLOWERS/MINUTES MOTION------------------------------------------------------

  //Draw all yellow flowers: minutes 1-30
  
  if (min >= 1) {
    image(yellowflower, -480, 345);
  }

  if (min >= 2) {
    image(yellowflower, -460, 345);
  }

  if (min >= 3) {
    image(yellowflower, -439, 345);
  }

  if (min >= 4) {
    image(yellowflower, -419, 345);
  }

  if (min >= 5) {
    image(yellowflower, -399, 345);
  }

  if (min >= 6) {
    image(yellowflower, -378, 345);
  }

  if (min >= 7) {
    image(yellowflower, -358, 345);
  }

  if (min >= 8) {
    image(yellowflower, -337, 345);
  }

  if (min >= 9) {
    image(yellowflower, -317, 345);
  }

  if (min >= 10) {
    image(yellowflower, -297, 345);
  }

  if (min >= 11) {
    image(yellowflower, -276, 345);
  }

  if (min >= 12) {
    image(yellowflower, -256, 345);
  }

  if (min >= 13) {
    image(yellowflower, -236, 345);
  }

  if (min >= 14) {
    image(yellowflower, -215, 345);
  }

  if (min >= 15) {
    image(yellowflower, -195, 345);
  }

  if (min >= 16) {
    image(yellowflower, -174, 345);
  }

  if (min >= 17) {
    image(yellowflower, -154, 345);
  }

  if (min >= 18) {
    image(yellowflower, -134, 345);
  }

  if (min >= 19) {
    image(yellowflower, -113, 345);
  }

  if (min >= 20) {
    image(yellowflower, -93, 345);
  }

  if (min >= 21) {
    image(yellowflower, -73, 345);
  }

  if (min >= 22) {
    image(yellowflower, -52, 345);
  }

  if (min >= 23) {
    image(yellowflower, -32, 345);
  }

  if (min >= 24) {
    image(yellowflower, -11, 345);
  }

  if (min >= 25) {
    image(yellowflower, 9, 345);
  }

  if (min >= 26) {
    image(yellowflower, 29, 345);
  }

  if (min >= 27) {
    image(yellowflower, 50, 345);
  }

  if (min >= 28) {
    image(yellowflower, 70, 345);
  }

  if (min >= 29) {
    image(yellowflower, 90, 345);
  }

  if (min >= 30) {
    image(yellowflower, 110, 345);
  }
  
  //Draw all pink flowers: minutes 31-59
  if (min >= 31) {
  image(pinkflower, -490, 330);
}

if (min >= 32) {
  image(pinkflower, -470, 330);
}

if (min >= 33) {
  image(pinkflower, -449, 330);
}

if (min >= 34) {
  image(pinkflower, -429, 330);
}

if (min >= 35) {
  image(pinkflower, -409, 330);
}

if (min >= 36) {
  image(pinkflower, -388, 330);
}

if (min >= 37) {
  image(pinkflower, -368, 330);
}

if (min >= 38) {
  image(pinkflower, -347, 330);
}

if (min >= 39) {
  image(pinkflower, -327, 330);
}

if (min >= 40) {
  image(pinkflower, -307, 330);
}

if (min >= 41) {
  image(pinkflower, -286, 330);
}

if (min >= 42) {
  image(pinkflower, -266, 330);
}

if (min >= 43) {
  image(pinkflower, -246, 330);
}

if (min >= 44) {
  image(pinkflower, -225, 330);
}

if (min >= 45) {
  image(pinkflower, -205, 330);
}

if (min >= 46) {
  image(pinkflower, -184, 330);
}

if (min >= 47) {
  image(pinkflower, -164, 330);
}

if (min >= 48) {
  image(pinkflower, -144, 330);
}

if (min >= 49) {
  image(pinkflower, -123, 330);
}

if (min >= 50) {
  image(pinkflower, -103, 330);
}

if (min >= 51) {
  image(pinkflower, -83, 330);
}

if (min >= 52) {
  image(pinkflower, -62, 330);
}

if (min >= 53) {
  image(pinkflower, -42, 330);
}

if (min >= 54) {
  image(pinkflower, -21, 330);
}

if (min >= 55) {
  image(pinkflower, -1, 330);
}

if (min >= 56) {
  image(pinkflower, 19, 330);
}

if (min >= 57) {
  image(pinkflower, 40, 330);
}

if (min >= 58) {
  image(pinkflower, 60, 330);
}

if (min >= 59) {
  image(pinkflower, 100, 330);
}
  
  //TURTLES/HOURS MOTION------------------------------------------------------
  
  if (hr >= 1) {
  image(turtle1, -640, 415);
    turtle1.resize(120, 54)
  }

  if (hr >= 2) {
    image(turtle2, -640, 370);
    turtle2.resize(120, 54)
  }

  if (hr >= 3) {
    image(turtle3, -640, 325);
    turtle3.resize(120, 54)
  }

  if (hr >= 4) {
    image(turtle1, -640, 280);
    turtle1.resize(120, 54)
  }

  if (hr >= 5) {
    image(turtle2, -640, 235);
    turtle2.resize(120, 54)
  }

  if (hr >= 6) {
    image(turtle3, -640, 190);
    turtle3.resize(120, 54)
  }

  if (hr >= 7) {
    image(turtle1, -640, 145);
    turtle1.resize(120, 54)
  }

  if (hr >= 8) {
    image(turtle2, -640, 100);
    turtle2.resize(120, 54)
  }

  if (hr >= 9) {
    image(turtle3, -640, 55);
    turtle3.resize(120, 54)
  }

  if (hr >= 10) {
    image(turtle1, -640, 10);
    turtle1.resize(120, 54)
  }

  if (hr >= 11) {
    image(turtle2, -640, -35);
    turtle2.resize(120, 54)
  }

  if (hr >= 12) {
    image(turtle3, -640, -80);
    turtle3.resize(120, 54)
  }
  
}
