function validateNumber() {
    False = [];
    //elements looped instead of validating each individually
    for(i=1;i<9;i++) {
      var num =  document.getElementById("num" + i).value.length;
      //put = instead of ==
      if (num == 0) {
        False.push("Empty");
      } 
    }
    
    if (Array.isArray(False) && False.length)  {
      alert("you need to fill in all numbers");
      return false;
    }
    else {
      return true;
    }
}

function changeSettings(){
  
  settings = document.forms.input.elements;
  if (validateNumber()){
    
    answer1 = settings.quantity1.value;
    creatureAmount = answer1;

    answer2 = settings.quantity2.value;
    foodAmount = answer2;
    
    answer3 = settings.quantity3.value;
    detectionRadius = answer3;
    
    answer4 = settings.quantity4.value;
    iterations = answer4;
    
    answer5 = settings.quantity5.value;
    mutationRate1 = answer5;
    
    answer6 = settings.quantity6.value;
    startHiddenSize = answer6;

    answer7 = settings.quantity7.value;
    elitismPercentage = answer7;
    
    answer8 = settings.quantity8.value;
    mutationAmount1 = answer8;
    
    start();
  }
}

function defaultSettings() {
  settings = document.forms.input.elements;
  
    settings.quantity1.value = 15;
    answer1 = settings.quantity1.value;
    creatureAmount = answer1;

    settings.quantity2.value = 130;
    answer2 = settings.quantity2.value;
    foodAmount = answer2;
    
    settings.quantity3.value = 170;
    answer3 = settings.quantity3.value;
    detectionRadius = answer3;
    
    settings.quantity4.value = 600;
    answer4 = settings.quantity4.value;
    iterations = answer4;
    
    settings.quantity5.value = 0.3;
    answer5 = settings.quantity5.value;
    mutationRate1 = answer5;
    
    settings.quantity6.value = 5;
    answer6 = settings.quantity6.value;
    startHiddenSize = answer6;

    settings.quantity7.value = 0.2;
    answer7 = settings.quantity7.value;
    elitismPercentage = answer7;
    
    settings.quantity8.value = 3;
    answer8 = settings.quantity8.value;
    mutationAmount1 = answer8;
    
    start();
}

