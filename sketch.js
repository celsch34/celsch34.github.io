let secondsRadius;

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
    textSize(12);
    fill(180);
    text(hr, 10, 30);
    fill(100);
    text(min, 10, 60);
    fill(0);
    text(sec, 10, 90);
  
  // Move origin to center of canvas
  translate(width / 1.2, height / 5);
  
  //draw sun circle
  fill('#FDA100');
  noStroke();
  circle(0,0,150);
  
  //trying ifs for yellow lines
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
if (sec == 60) {
      let secondAngle = map(60, 0, 60, 0, 360);
      push();
      rotate(secondAngle);
      strokeWeight(8);
      stroke('#FDA100');
      line(0, 0, 0, -secondsRadius);
      pop();
}
   
  

  
}
