//to generate random number for the game
var min = 1;
var max = 100;
let count = 0;
let res = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(res);

//generate random numbers inside the bubble
var spanele = document.getElementById("randomnum1");
var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
spanele.textContent = randomnumber;
var spanele = document.getElementById("randomnum2");
var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
spanele.textContent = randomnumber;
var spanele = document.getElementById("randomnum3");
var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
spanele.textContent = randomnumber;
var spanele = document.getElementById("randomnum4");
var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
spanele.textContent = randomnumber;
var spanele = document.getElementById("randomnum5");
var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
spanele.textContent = randomnumber;
var spanele = document.getElementById("randomnum6");
var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
spanele.textContent = randomnumber;

//onclick restart ,it will reload the current game page instead of going to the main page
function functionres() {
    count = 1;
    res = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(res);
    document.getElementById("game").innerHTML = `<h2>GuessQuest</h2>
        <h4>We have selected a random number between 1 and 100. <br>See if you can guess it in 10 turns or fewer. <br>We'll tell you if your guess was too high or too low.</h4>
        <h3>Enter a guess:  <div id="breaks"><br></div><input type="number" id="guess">  <button onclick="myFunction()" id="submitu">submit guess</button></h3>
        <h3 id="guessings">Previous Guesses:  <div id="breaks2"><br> </h3>
        <div id="results"></div>
        <br>
        <button onclick="functionres()" id="submitu">Restart</button>
        <div class="footer">Created by Aravindh_S @ 2024</div>`;
}

//onclick start it will go to game page from main page
function myfunc() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

//this function is for the game control and results
function myFunction() {

    if (count == 10) {
        document.getElementById("submitu").disabled = true;
        document.getElementById("guess").disabled = true;
        document.getElementById("results").innerHTML = "GameOver";
        document.getElementById("submitu").style.color = "white";
        document.getElementById("submitu").style.backgroundColor = "#ffffff44";
        document.getElementById("submitu").style.cursor = "not-allowed";

    }
    else {

        var a = parseInt(document.getElementById("guess").value);
        if (isNaN(a)) {
            document.getElementById("results").innerHTML = "You must Enter a value";
            return;
        }
        count = count + 1;
        document.getElementById("guessings").innerHTML += a + " ";
        document.getElementById("results").style.display = "block";
        var guessSpan = document.querySelectorAll('.bubble span');

        if (a > res) {

            document.getElementById("results").innerHTML = "The given value is greater than the expected value";

            guessSpan.forEach(function (span) {
                span.classList.add('wrong');
            });


        }
        else if (a < res) {
            document.getElementById("results").innerHTML = "The given value is lesser than the expected value";
            guessSpan.forEach(function (span) {
                span.classList.add('wrong');
            });

        }
        else {
            document.getElementById("results").innerHTML = "Correct Answer";
            guessSpan.forEach(function (span) {
                span.classList.add('correct');
            });

            document.getElementById("submitu").style.color = "white";
            document.getElementById("submitu").style.backgroundColor = "#ffffff44";
            document.getElementById("submitu").style.cursor = "not-allowed";
            document.getElementById("submitu").disabled = true;
            document.getElementById("guess").disabled = true;
        }
    }
}