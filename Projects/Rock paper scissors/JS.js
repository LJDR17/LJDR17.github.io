//Caching the DOM - good so you can use elements easily later
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//Everything separated into functions for readability and easy debugging
function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; //returns the index of "choices"
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(user, computer){
    //ECMAScript 6 is also known as ES6 and ECMAScript 2015. Some people call it JavaScript 6.) = new version of javascript with more features
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user); //remember it's actually userChoice getting passed to it, there is no ID of user
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //the following is ES6 "`" means you dont have to use "+" and "" when adding strings together
    //"$" and "{}" can be added to functions so they aren't literally displayed
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} You win!`;
    //note - the element isn't hard coded, it just applies the class to whatever the user picked
    userChoice_div.classList.add('green-glow'); //.classlist gives an array of all the classes on that element
    /*ES6 - instead of setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 300);   
    you can take out function and just add an arrow => as well as taking away curly brackets (only it's one line)*/
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300); /*takes a function as its first argument, 
    then waits a certain amount of milliseconds to call it which is the second argument*/

}
function lose(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord} You lost...`; 
    userChoice_div.classList.add('red-glow'); 
    
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300); 
    
}
function draw(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord} It's a draw.`;
    userChoice_div.classList.add('grey-glow'); 
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300) 
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            //again break it down into functions, user and computer choices are passed into each function
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    //again, using ES6
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();
