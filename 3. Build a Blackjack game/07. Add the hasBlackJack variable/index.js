let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlacjack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlacjack = true
} else {
    console.log("You're out of the game! 😭")
}

// CASH OUT!
console.log( hasBlacjack)
