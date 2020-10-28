//feature = add option to choose where food goes - influences evolution.
//feature = add poison = influences evolution
function Food() {
  // Creates random coordinates for food
  this.x = Math.floor(Math.random() * windowWidth);
  this.y = Math.floor(Math.random() * windowHeight);
  // 'Push' adds 1 food particle to the array
  food.push(this);
}

//Food is an object - the show function defines what the food looks like
Food.prototype.show = function() {
  fill('rgb(0,100,0)');
    noStroke();
    ellipse(this.x, this.y, 12);
}

Food.prototype.restart = function() {
  this.x = Math.floor(Math.random() * windowWidth);
  this.y = Math.floor(Math.random() * windowHeight);
}

//proposed feature
function Poison() {
  // Creates random coordinates for food
  this.x = Math.floor(Math.random() * windowWidth);
  this.y = Math.floor(Math.random() * windowHeight);
  // 'Push' adds 1 food particle to the array
  poison.push(this);
}

Poison.prototype.show = function() {
  fill('rgb(255,0,0)');
    noStroke();
    ellipse(this.x, this.y, 8);
}

Poison.prototype.restart = function() {
  this.x = Math.floor(Math.random() * windowWidth);
  this.y = Math.floor(Math.random() * windowHeight);
}
