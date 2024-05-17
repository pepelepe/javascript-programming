let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]
// Fetch the button from the DOM, store it in a variable
const scoreBtn = document.getElementById("score-btn")

// Use addEventListener() to listen for button clicks
scoreBtn.addEventListener('click', function(){
    // Log Jane's score when the button is clicked (via data)
    console.log(`${data[0].player} score is ${data[0].score}!`)
})

//Peter Son


