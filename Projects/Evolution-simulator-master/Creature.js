function Creature(genome) {
    this.x = Math.floor(Math.random() * windowWidth);
    this.y = Math.floor(Math.random() * windowHeight);
    this.velocityX = 0;
    this.velocityY = 0;
    
    /*score is under gene because the score needs to be attached to the specific weights of the network,
     it is a library variable*/
    
    /*score is usually tied to population[i].score. Here though, instead of iterating through
    the population array, the genome is just passed to the creature and individually given a score, 
    remember population is just an array of genomes*/

    /*genome is contains many stats about network, including input, nodes, gates, but more 
    importantly, score is a statistic there, which is why score needs to be under genes (genome)*/
    this.genes = genome;
    this.genes.score = 0;
    this.points = 0;
    
    creatures.push(this);
}

Creature.prototype.move = function() {
    
    var input = this.detect();
    //activate is a library method
    var output = this.genes.activate(input);
    
    var angle = output[0] * 2 * PI;
    var speed; 
    if (output[1] > 1) {
        speed = 1;
    }
    else if (output[1] < 0) {
        speed = 0;
    }
    else {
        speed = output[1];
    }
        
    //https://stackoverflow.com/questions/22421054/determine-movement-vectors-direction-from-velocity
    this.velocityX = speed * Math.cos(angle) * SPEED;
    this.velocityY = speed * Math.sin(angle) * SPEED;
    
    this.x += this.velocityX;
    this.y += this.velocityY;

    this.enableWrap();
    
    //points are lost every frame
    this.points *= 0.99;
    this.genes.score = this.points;
    
    if (this.genes.score > highestScore) {
        highestScore = this.genes.score;
    }
    else {
        highestScore = highestScore;
    }
}

Creature.prototype.disableWrap = function() {
    //disables wrap around, creatures lose points if they move into a wall
    //they can't see the wall...
    if (this.x > 900) {
        this.x = 900;
        this.points -= 0.01;
    }
    if (this.x < 0) {
        this.x = 0;
        this.points -= 0.01;
    }
    if (this.y > 800) {
        this.y = 800;
        this.points -= 0.01;
    }
    if (this.y < 0) {
        this.y = 0;
        this.points -= 0.01;
    }
}

Creature.prototype.enableWrapWithPenalty = function() {
    //disables wrap around, creatures lose points if they move into a wall
    //they can't see the wall...
    if (this.x >= 900) {
        this.x = this.x % 900;
        this.points -= 10;
    }
    else if(this.x <= 0) {
        this.x = this.x + 900;
        this.points -= 10;
    }
    else {
        this.x = this.x;  
    }

    if (this.y >= 800) {
        this.y = this.y % 800
        this.points -= 10;
    }
    else if (this.y <= 0) {
        this.y = this.y + 800
        this.points -= 10;
    }
    else {
        this.y = this.y;
    }
}

Creature.prototype.enableWrap = function() {
    //https://stackoverflow.com/questions/39606123/how-can-i-achieve-a-wraparound-effect-in-an-arcade-like-game
    //Limit position to width and height of canvas
    
    if (this.x >= windowWidth) {
        this.x = this.x % windowWidth; 
    }
    else if(this.x <= 0) {
        this.x = this.x + windowWidth;
    }
    else {
        this.x = this.x;  
    }

    if (this.y >= windowHeight) {
        this.y = this.y % windowHeight;
    }
    else if (this.y <= 0) {
        this.y = this.y + windowHeight;
    }
    else {
        this.y = this.y;
    }
}
  
Creature.prototype.show = function() {
    fill('rgb(0,0,255)');
    noStroke();
    ellipse(this.x, this.y, 15); 
}
  
Creature.prototype.eat = function(object) {
    var distance1 = distance(this.x, this.y, object.x, object.y);
    //distance so small they're pretty much overlapping - collision detection
    if (distance1 < 10) {
      //if the object that is being eaten is in the poison array, minus points, otherwise add points
     /* var includes = poison.includes(object);
      if (includes == true ) { 
        this.points -= 20;
        object.restart();
      }
      else {*/
        this.points += 20;
        object.restart();
      //}
      return true;
    }
    return false;
}
  
Creature.prototype.detect = function() {
    
    // Detect nearest foods
    var nearestFoods = [];
    //makes an array the size of foodDetection
    //https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
    var foodDistances = Array.apply(null, Array(foodDetection)).map(Number.prototype.valueOf, Infinity);
    
    for(var localFood in food){
        localFood = food[localFood];
        //if creature eats specific food in array
        if(this.eat(localFood)) continue;
        
        var distance1 = distance(this.x, this.y, localFood.x, localFood.y);
        
        // largest distance within radius
        if(distance1 < detectionRadius){
            //largest distance in foodDistances array
            var largestClosestDistance = Math.max.apply(null, foodDistances);
            
            //index in foodDistances where largestClosestDistance is
            var whereLargest = foodDistances.indexOf(largestClosestDistance);
            
            if(distance1 < largestClosestDistance){
                //separate arrays for the physical food and their distances
                //populates array with relevant data
                foodDistances[whereLargest] = distance1;
                nearestFoods[whereLargest] = localFood;
            }
        }
    }
    
    /* Detect nearest foods
    var nearestPoison= [];
    //makes an array the size of foodDetection
    //https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
    var poisonDistances = Array.apply(null, Array(foodDetection)).map(Number.prototype.valueOf, Infinity);
    
    for(var localPoison in poison){
        localPoison = poison[localPoison];
        if(this.eat(localPoison)) continue;
    
        var distance1 = distance(this.x, this.y, localPoison.x, localPoison.y);
        if(distance1 < detectionRadius){
            // largest distance within radius
            var largestClosestDistance = Math.max.apply(null, poisonDistances);
            
            //index in foodDistances where largestClosestDistance is
            var whereLargest = poisonDistances.indexOf(largestClosestDistance);
            
            if(distance1 < largestClosestDistance){
                //separate arrays for the physical food and their distances
                poisonDistances[whereLargest] = distance1;
                nearestPoison[whereLargest] = localPoison;
            }
        }
    }*/
    
    // Create and normalize input
    var input = [];
    
    //so creature can avoid wall
    //input.push(this.x/900);
    //input.push(this.y/800);
    
    for(var i = 0; i < foodDetection; i++){
        var food1 = nearestFoods[i];
        var distance1 = foodDistances[i];
        
        if(food1 == undefined){
            //if there is no food in distance, inputs are 0
            input = input.concat([0, 0]);
        } 
        else {
            //output is an array, each of the following inputs the angle and distance to the network
            input.push(angle(this.x, this.y, food1.x, food1.y) / (2 * PI));
            input.push(distance1 / detectionRadius);
        }
    }

    /*for(var i = 0; i < foodDetection; i++){
        var poison1 = nearestPoison[i];
        var distance1 = poisonDistances[i];
        
        if(poison1 == undefined){
            //if there is no food in distance, inputs are 0
            input = input.concat([0, 0]);
        } 
        else {
            //output is an array, each of the following inputs the angle and distance to the network
            input.push(angle(this.x, this.y, poison1.x, poison1.y) / (2 * PI));
            input.push(distance1 / detectionRadius);
        }
    }*/

    //shows detection radius when you hover over creatures
    if(distance(mouseX, mouseY, this.x, this.y) < 15){
        noFill();
        stroke(0);
        ellipse(this.x, this.y, detectionRadius*2);
    }
    
    return input;
}
