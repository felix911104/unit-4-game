$(document).ready(function() {
    //create random number range 19-120
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    
    //displays target number 
    $("#number-to-guess").text(targetNumber);
     
    //randomly selects numbers range 1-12 for each of the crystals
    var number1 = Math.floor(Math.random() * 11 + 1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    var number3 = Math.floor(Math.random() * 11 + 1);
    var number4 = Math.floor(Math.random() * 11 + 1); 
    
    //stated with 0 user score, wins , and losses 
    var counter = 0;
    var wins = 0;
    var losses = 0;
    
    //displays var value 
    $("#scoreboard").html(counter);
    $('#numberWins').html(wins);
    $('#numberLosses').html(losses);
    
    //resets game after win or loss
    function reset() {
        targetNumber = Math.floor(Math.random() * 101 + 19);
        $("#number-to-guess").text(targetNumber);
        number1 = Math.floor(Math.random() * 11 + 1);
        number2 = Math.floor(Math.random() * 11 + 1);
        number3 = Math.floor(Math.random() * 11 + 1);
        number4 = Math.floor(Math.random() * 11 + 1);
        counter = 0;
        $("#scoreboard").html(counter);
    };
    
    //if win
    function win() {
        alert("Great, you just earn a score, only one...")
        wins++;
        $("#numberWins").html(wins);
        reset();
    }
    
    //if lose
    function lose() {
        alert("Sorry, you missed. Try another round.")
        losses++;
        $("#numberLosses").html(losses);
        reset();
    }
    
    //on click function - blue 
    $("#blue").on("click", function () {
        counter += number1;
        $("#scoreboard").html(counter);
        
        if (counter === targetNumber) {
            win();
        }
    
        else if (counter >= targetNumber) {
          lose();
        }
    });
    
    //on click function - red 
    $("#red").on("click", function () {
        counter += number2;
        $("#scoreboard").html(counter)
    
        if (counter === targetNumber) {
          win();
        }
        else if (counter >= targetNumber) {
          lose();
        }
    });
    
    //on click function - green 
    $("#green").on("click", function () {
        counter += number3;
        $("#scoreboard").html(counter)
    
        if (counter === targetNumber) {
          win();
        }
        else if (counter >= targetNumber) {
          lose();
        }
    });
    
    //on click function - purple 
    $("#purple").on("click", function () {
        counter += number4;
        $("#scoreboard").html(counter)
    
        if (counter === targetNumber) {
          win();
        }
        else if (counter >= targetNumber) {
          lose();
        }
      })
    })