let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}
// or because condition  and && operator are true we use ! to inverte to false

if (!hasSolvedChallenge && !hasHintsLeft) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}


