var Counter = 0;
//Starts the function here
function start() {
    //setting button for an event listening
    var button = document.getElementById("cookiebutton");
    Score(Counter);
    button.addEventListener("click",Scoredisplay,false);
    MessageDisplay(Counter);
}
//Calculating the score
function Score() {
    var TenP = 10;
    var HundredP = 100;
    //When the image is clicked, add 1 to the score
    Counter += 1;
    //when score reached more than 20, add 10 per click
    if (Counter > 20){
        Counter += TenP;
    }
    //when score reached more than 100, add 100 per click
    if (Counter > 100){
        Counter += HundredP;
    }
    //when the score is below 20, continue adding 1
    else
        Counter +=1;
}
//display the current number or score for the player
function Scoredisplay() {
    var display = document.getElementById("Scorenum");
    display.value = Counter;
}
//Change the name of the player and reset the score
function changeplayer() {
    x = prompt("Enter Player's Name!");
    localStorage.setItem("player", x);
    Counter = 0;
    document.getElementById("Player").innerHTML = localStorage.getItem("player");
}
//triggers a comment when they reached more than 50 score
function MessageDisplay(Counter) {
    var message = document.getElementById("message");
    if (Counter > 50) {
        message.innerHTML = "OH MY GOSH! That's a lot of Cookie!";
    }
    else {
        message.innerHTML = "";
    }
}

function ChangeBackground() {
    var background = prompt("Enter New Background Color!");
    document.body.style.backgroundColor = background;

}

function CookieButton() {
    var fairy = document.getElementById("CookieClick");
        fairy.src = '../Assets/Fairy.png';

}
