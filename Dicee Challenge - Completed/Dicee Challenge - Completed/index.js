var randomNumberOne = Math.floor((Math.random() * 6) + 1);
 

var randomNumberTwo = Math.floor((Math.random() * 6) + 1);

var diceOne = document.querySelectorAll("img")[0];


var diceTwo = document.querySelectorAll("img")[1];

  

var source = "images/dice";

diceOne.setAttribute("src", (source + randomNumberOne +".png"));

diceTwo.setAttribute("src", (source + randomNumberTwo +".png"));

if (randomNumberOne === randomNumberTwo){
    document.querySelector("h1").innerText="Draw 🙅‍♂️";
}


if (randomNumberOne < randomNumberTwo){
    document.querySelector("h1").innerText="Player 2 Won 🔥 ";
}

if (randomNumberOne > randomNumberTwo){
    document.querySelector("h1").innerText="Player 1 Won 🔥 ";
}


console.log(diceOne);



