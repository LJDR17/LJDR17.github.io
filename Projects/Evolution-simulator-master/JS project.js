var creatures = [];
var food = [];
//var poison = [];
var iteration = 0;
var highestScore = 0;

var started = false;

//P5.js function
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  noLoop();
  canvas.id('canvas');
  canvas.parent('canvas-wrapper');
  textSize(40);
  fill(50);
  text('Scroll down to change simulation parameters', windowWidth/3.2, windowHeight/2); // Text wraps within text box
}

//so canvas scales to screen size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*Allow frame rate to go past monitor refresh rate - with the underlying requestAnimationFrame you are locked into whatever frame rate the browser gives you 
(this is usually no higher than the monitor refresh rate, but it can be higher).
I can take control of the loop myself with the following using the redraw function. However the browser may not visualise the canvas any quicker than the 
requestAnimationFrame frequency even though it is simulated. This can result in what looks like stuttering.
requestAnimationFrame is a broswer API method:
The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser 
calls a specified function to update an animation before the next repaint. 
The method takes a callback as an argument to be invoked before the repaint. You should call this method 
whenever you're ready to update your animation onscreen. This will request that your animation function be called before the browser performs the next repaint. 
The number of callbacks is usually 60 times per second, but will generally match the display refresh rate in most web browsers.
requestAnimationFrame() calls are paused in most browsers when running in background tabs to improve performance and battery life.*/

//these functions allow me to toggle speed increase
var speed = false;
function enableSpeed() {
  noLoop();
  speed = true;
}
function disableSpeed() {
  loop();
  speed = false;
}

/* 'Draw()' is part of P5.js and continually executes the lines of code 
within it after the 'setup()' function has been triggered*/

function draw() {
if (started) {
  if(speed) {
    setTimeout(redraw, 0); // where 0 is the minimum time between frames in ms
  }
 
  //makes sure the creature actually appears to move and doesn't leave a trail of where it was before
  clear();

  // Check if evaluation is done
  if(iteration == iterations){
    endEvaluation();
    iteration = 0;
  }
  for(var i = food.length - 1; i >= 0; i--){
    food[i].show();
  }
  /*for(var i = poison.length - 1; i >= 0; i--){
    poison[i].show();
  }*/
  for(var i = creatures.length - 1; i >= 0; i--){
    //refresh updates statistics
    creatures[i].move();
    //show then reflects these changes onto the canvas
    creatures[i].show();
  }

  iteration++ /*adding the iteration counter here is useful because
  the code here is continually looped. This means I don't have to try
  and implement timer functions which are designed to execute code after a delay*/
}

}
function start(){
  
  removeData(chart);
  removeData(chart2);

  started = true;
  //document bug
  iteration = 0;
  food = [];
  //poison = [];
  initNeat();
  // Triggers food spawning and limits amount of food
  for(var i = 0; i < foodAmount; i++){
  // As food is an object, 'new' calls in a new instance of food
  new Food();
  }

  /*for(var i = 0; i < poisonAmount; i++){
    
  new Poison();
  }*/

  for(var i = 0; i < 100; i++) neat.mutate();

  startEvaluation();
  loop();
}


//distance between food and creature
function distance(x1, y1, x2, y2) {
  var distanceX = x2-x1;
  var distanceY = y2-y1;
  //document sqrt bug - I missed it
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  //https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
}

// Get the angle from one point to another 
function angle(x1, y1, x2, y2){
  d = distance(x1, y1, x2, y2);
  dx = (x2-x1) / d;
  dy = (y2-y1) / d;

  a = Math.acos(dx);
  a = dy < 0 ? 2 * Math.PI - a : a;
  return a;
}  
