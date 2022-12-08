// generating a random number for the dice
var randomNum1 = Math.floor(6 * (Math.random()) + 1);
var randomNum2 = Math.floor(6 * (Math.random()) + 1);

//changing the dice image
document.querySelector(".dice .img1").setAttribute("src", "images/dice"+ randomNum1 +".png");

document.querySelector(".dice .img2").setAttribute("src", "images/dice"+ randomNum2 +".png");

//compairing score to declair winner
if( randomNum1 > randomNum2){
    document.querySelector(".container h1").innerHTML = "🚩 Player-1 Wins!";
}
else if( randomNum1 < randomNum2){
    document.querySelector(".container h1").innerHTML = "Player-2 Wins! 🚩";
}
else if( randomNum1 === randomNum2){
    document.querySelector(".container h1").innerHTML = "Draw!";
}