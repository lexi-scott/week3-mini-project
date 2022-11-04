alert("Will you play with me? I'm so lonely");

    
var wins = 0;
var loss = 0;
var ties = 0; 

//wrap game in a function
function rockPS () {

//prompt for user's answer
var userChoice = (prompt("Choose R P or S")).toUpperCase();

//alert for computer's choice
var computerChoice = ["R", "P", "S"];
var ccMath = computerChoice[(Math.floor(Math.random() * 3))];
alert("The computer chose " + ccMath + "!")
   
//alerts for comparison of variables
    if (userChoice === "S" && ccMath === "P") {
        alert("User Wins");
        wins++
    }

    else if (userChoice === "R" && ccMath === "S") {
        alert("User Wins");
        wins++
    }

    else if (userChoice === "P" && ccMath === "R") {
        alert("User Wins");
        wins++
    }
    
    else if (userChoice === ccMath) {
        alert("It's a tie");
        ties++
    }

    else {
        alert("computer wins");
        loss++
    };
 
    alert(
        "Stats:\nWins: " + wins + "\nLosses: " + loss + "\nTies: " + ties
      );
      
    var playAgain = confirm("Play again?");
    
    if (playAgain) {
    rockPS();
};
}

rockPS ();










