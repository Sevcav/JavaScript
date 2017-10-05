/* CIS-135JS Ken Chapman 
BattlelShip Game Chapter 2 of HeadStart JS
Modified with LET Function instead of VAR
Converting to a Function

*/
function BBGAME() {

// Random Creates a number between .01 to .99, Floor Rounds Dwn
LET randomLoc = Math.floor(Math.random() * 5); 
LET location1 = randomLoc;
LET location2 = location1 + 1;
LET location3 = location1 + 2;
LET guess;
LET hits = 0;
LET guesses = 0;
LET isSunk = false;


while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else {

        guesses = guesses + 1;
        
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
            }
            
		} else {
			alert("MISS");
		}
	}
}

LET stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3/guesses);

alert(stats);
}