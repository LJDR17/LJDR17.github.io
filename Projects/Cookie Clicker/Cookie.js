
var num = 0;
var click = 1;
var varingriedient = 0;
var vargranny = 0;
var varbakery = 0;
var price = 29;
var price2 = 99;
var price3 = 499;

//colour of buttons
setInterval(auto, 100)
    function auto() {
    //ingriedient upgrade button
    if (num > price) {
     
        document.getElementById("ingriedient").innerHTML = "Buy ingriedients";
        document.getElementById("ingriedient").style.backgroundColor = "chocolate";
    }
    else {
        document.getElementById("ingriedient").innerHTML = "Not enough money";
        document.getElementById("ingriedient").style.backgroundColor = "red";
    }
    //Granny upgrade button
    if (num > price2) {
        document.getElementById("granny").innerHTML = "Upgrade grannies";
        document.getElementById("granny").style.backgroundColor = "chocolate";
    }
    else {
        document.getElementById("granny").innerHTML = "Not enough money";
        document.getElementById("granny").style.backgroundColor = "red";
    }
    //bakery upgrade button
    if (num > price3) {
        document.getElementById("bakery").innerHTML = "Buy bakeries";
        document.getElementById("bakery").style.backgroundColor = "chocolate";
    }
    else {
        document.getElementById("bakery").innerHTML = "Not enough money";
        document.getElementById("bakery").style.backgroundColor = "red";
    }
}

//reset game
function reset() {
    location.reload();
}

//cookie clicker
function clickme() { 
    num += click;
    document.getElementById("number").innerHTML = num;
    
}   

//ingriedient button
function ingriedient() {
   if (num > price) {
        varingriedient += 1;
        document.getElementById("numings").innerHTML = "Ingriedients:" + " " + varingriedient;
        num = num - price;
        document.getElementById("number").innerHTML = num;
        click += 2;
        price += 30;
        document.getElementById("priceing").innerHTML = "Cost:" + " " + price;
    }   
}

//granny button
function granny() {
    setInterval(auto1, 1000)
    function auto1() {
        num += 10;
        document.getElementById("number").innerHTML = num;
    }
    if (num > price2) {
        vargranny += 1;
        document.getElementById("numgrans").innerHTML = "Grannies:" + " " + vargranny;
        num = num - price2;
        document.getElementById("number").innerHTML = num;
        price2 += 80;
        document.getElementById("pricegran").innerHTML = "Cost:" + " " + price2;   
    }  
}

//bakery button
function bakery() {
    setInterval(auto3, 4000)
    function auto3() {
        num += 80;
        document.getElementById("number").innerHTML = num;
    }
    if (num > price3) {
        varbakery += 1;
        document.getElementById("numbaks").innerHTML = "Bakeries:" + " " + varbakery;
        num = num - price3;
        document.getElementById("number").innerHTML = num;
        price3 += 200;
        document.getElementById("pricebak").innerHTML = "Cost:" + " " + price3;
    }  
}

    
       
    
    

    

    







