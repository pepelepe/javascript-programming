let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? try to google it!
let removed = messages.pop()
//messages.pop();
console.log("pop messages: "+ messages)


console.log("removed: " + removed)
