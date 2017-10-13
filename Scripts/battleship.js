/* CIS-133JS Ken Chapman 
BattlelShip Game Chapter 2 of HeadStart JS
Modified with let Function instead of VAR
Converted to using Funtions
Added an array and a function to check if passed parameter is within array


*/

//returns true if passed param is in array, or false if it does not 
function includes(k) {
	for(var i=0; i < this.length; i++){
	  if( this[i] === k || ( this[i] !== this[i] && k !== k ) ){
		return true;
	  }
	}
	return false;
  }


function BBGAME() {

// Random Creates a number between .01 to .99, Floor Rounds Dwn
let randomLoc = Math.floor(Math.random() * 5); 
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location1 + 2;
let guess;
let prevguess = []; //Build an Array of previous Guesses
let hits = 0;
let guesses = 0;
let isSunk = false;

// Issue with choosing the same number that scored a hit causing Sunk (array of previous guesses?)
while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else{

		//added a check here to see if guess has already been made
	if (prevguess.includes(guess)) {
		alert("That cell has already been guessed before!")
	} else{
			
		++guesses; //increment guesses by 1
		prevguess.push (guess); //add guess to prevguess array
        
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			if (hits === 3) {
				isSunk = true;
				alert("You sank my battleship!");
            }
            
		} else {
			alert("MISS");
		}
	}
}}

let stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3/guesses);

alert(stats);
}
