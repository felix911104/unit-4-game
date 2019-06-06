$(document).ready(function() {
    //randomly selects number between 19-120
        var targetNumber = Math.floor(Math.random() * 101 + 19);
    
    //displays target number in proper div
      $("#number-to-guess").text(targetNumber);
    
    
    //randomly selects numbers between 1-12 for each of the crystals
      var number1 = Math.floor(Math.random() * 11 + 1);
      var number2 = Math.floor(Math.random() * 11 + 1);
      var number3 = Math.floor(Math.random() * 11 + 1);
      var number4 = Math.floor(Math.random() * 11 + 1);
    
    //console log numbers randomly selected for crystals
      console.log("blue: " + number1);
      console.log("red: " + number2);
      console.log("green: " + number3);
      console.log("purple: " + number4);
    
      //beginning user score, wins #, and losses #
      var counter = 0;
      var wins = 0;
      var losses = 0;
    
      //displays var value to proper divs
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
    
    
        console.log("blue: " + number1);
        console.log("red: " + number2);
        console.log("green: " + number3);
        console.log("purple: " + number4);
    
        counter = 0;
        $("#scoreboard").html(counter);
      };
    
      //if user wins
      function win() {
        alert("Great, you just earn a score, only one...")
        wins++;
        console.log("wins:" + wins)
        $("#numberWins").html(wins);
        reset();
      }
    
      //if user loses
      function lose() {
        alert("Sorry, you missed. Try another round.")
        losses++;
        console.log("losses:" + losses);
        $("#numberLosses").html(losses);
        reset();
      }
    
      //on click function for blue crystal
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
    
      //on click function for red crystal
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
    
      //on click function for green crystal
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
    
      //on click function for purple crystal
      var purple = $("#purple").on("click", function () {
    
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