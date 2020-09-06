function finishFunction() {
    alert("Thank you for completing the quiz.");
    return true;
}
  
function validateText1() {
    var answer = document.forms.Quiz.name.value;
    if (answer === "") {
      alert("You must give your name");
      return false;
    } else {
      return true;
    }  
}
  
function validateText2() {
    var answer = document.forms.Quiz.ans.value;
    if (answer === "") {
      alert("You must give an answer");
      return false;
    } else {
      return true;
    }  
}
  
function validateNumber() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is not a number or less than one or greater than 10. || means OR in JavaScript
    if (isNaN(x) || x < 1 || x > 100) {
      alert("You must give a number");
      return false;
    } else {
      return true;
    }
}
  
function validateRadio1() {
    var x = document.forms.Quiz.elements.radio1.value;
    if (x === "") {
      alert("One radio button must be selected");
      return false;
    }else{
      return true;
    }
}
  
function validateRadio2() {
    var x = document.forms.Quiz.elements.radio2.value;
    if (x === "") {
      alert("One radio button must be selected");
      return false;
    }else{
      return true;
    }
}
  
function validateQuestions() {
      if (validateText1() && validateText2() && validateNumber() && validateRadio1() && validateRadio2()){
        return true;
      }else{
        return false;
      }
}
    
function checkAnswers(){
    // grab all the elements from the quiz form, store them as quiz
    var score = 0;
    quiz = document.forms.Quiz.elements;
    if (validateQuestions()){
      // Check the answer to the first question
      answer1 = quiz.quantity.value;
      if (answer1 == "3.2"){
        score = score + 1;
      }
      answer2 = quiz.radio1.value;
      if (answer2 == "Answer1"){
        score = score + 1;
      }
      answer3 = quiz.ans.value;
      if (answer3 == "ALU"){
        score = score + 1;
      }
      answer4 = quiz.radio2.value;
      if (answer4 == "Answer1"){
        score = score + 1;
      }
      showFeedback(score);
    }
}
  
function showFeedback(score){
    document.forms.Quiz.style.display = "none";
    body = document.getElementsByTagName("body");
    if (score == 0){
      document.body.innerHTML = '<h1>Better luck next time, your score was... ' + score;
    } else if (score < 2){
      document.body.innerHTML = '<h1>Maybe you need to visit the home page again, your score was... ' + score;
    } else if (score < 4){
      document.body.innerHTML = '<h1>You almost got full marks! Great, your score was... ' + score;
    } else {
      document.body.innerHTML = '<h1>Excellent, full marks to you! Your score was... ' + score;
      document.body.innerHTML += '<div><img width="600"; height="300"; id="picture"; src="Images/CPU.jpg"/></div>';
      
    }
}