var detectionRadius;
var foodDetection  = 4;

/*optimisation - adding less food means creatures actually have to learn
instead of going really fast in a straight line where there is a likely chance they will run into food*/
var foodAmount;
//var poisonAmount = 30;

var SPEED = 3;

var creatureAmount;
var iterations;
var startHiddenSize;
var mutationRate1;
var mutationAmount1;
var elitismPercentage;

var neat;

var generation;
var score;

//so I don't get annoying messages
neataptic.Config.warnings = false;

// Construct the genetic algorithm
function initNeat(){
  //foodDetection is *2 because the angle and distance of food needs to be inputted
  neat = new neataptic.Neat(foodDetection * 2, 2, null,
    {
      mutation: neataptic.Methods.Mutation.ALL,
      popsize: creatureAmount,
      mutationRate: mutationRate1,
      mutationAmount: mutationAmount1,
      elitism: Math.round(elitismPercentage * creatureAmount),
      network: new neataptic.Architect.Random(foodDetection * 2, startHiddenSize, 2)
    }
  );
}

//Start the evaluation of the current generation
function startEvaluation(){
    creatures = [];
    highestScore = 0;
  
    for(var genome in neat.population){ 
      genome = neat.population[genome];
      new Creature(genome);
    }
}

//End the evaluation of the current generation
function endEvaluation(){
    //for graph
    generation = neat.generation;
    score = neat.getAverage();
    addData(chart, generation, score);
    addData(chart2, generation, highestScore);

    neat.sort();
    var newPopulation = [];
  
    // Elitism
    for(var i = 0; i < neat.elitism; i++){
      newPopulation.push(neat.population[i]);
    }
  
    // Breed the next individuals
    for(var i = 0; i < neat.popsize - neat.elitism; i++){
      newPopulation.push(neat.getOffspring());
    }
  
    // Replace the old population with the new population
    neat.population = newPopulation;
    neat.mutate();
  
    neat.generation++;
    startEvaluation();
}
