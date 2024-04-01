var firstDice = Math.round(Math.random()*5) + 1;
var secondDice = Math.round(Math.random()*5) + 1;

var firstRef = "./images/dice" + firstDice + ".png";
var secondRef = "./images/dice" + secondDice + ".png";

document.querySelector(".img1").setAttribute("src",firstRef);
document.querySelector(".img2").setAttribute("src",secondRef);

var header = document.querySelector('h1');  

if (firstDice > secondDice) {
    header.innerHTML = "Player 1 Wins";
} else if (secondDice > firstDice) {
    header.innerHTML = "Player 2 Wins";
} else {
    header.innerHTML = "Draw";
}