let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function tryage() {
    for (let i = 0; i < fruit.length; i++) {
        //fruit[i] + ", "
        console.log(fruit[i] + ", ")
        if (fruit[i] === "🍊") {
            orangeShelf.textContent += '"orange", ' 
        } else if (fruit[i] === "🍎") {
            appleShelf.textContent += '"apple", "🍎" '
        }
    }
}
tryage()