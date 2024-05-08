// Create a person object that contains three keys: name, age, and county.

let person = {
    name: "Peter",
    age: 37,
    country: "canada"
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

function logData() {
    let data = person.name +" is "+ person.age +" old and lives in "+ person.country
    //console.log(data)
    return data
}

// Call the logData() function to verify that it works
logData()
console.log(logData())
