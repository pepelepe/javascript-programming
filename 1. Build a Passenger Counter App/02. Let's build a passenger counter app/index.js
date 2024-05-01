// initialize the count as 0
let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);
}

// Create a function save() which logs out the count when it's called
// Create a variable that contains both the count and the dash separator
// Render the variable in the saveEl using innerText
//NB: Make sure to not delete the existing content of the paragraph
// Set the count to 0
function save() {
    let setCount = count + ' - '; 
    saveEl.textContent += setCount;
    count = 0
    countEl.innerText = count;
}

