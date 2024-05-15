let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    myLeads = JSON.stringify(myLeads)
    localStorage.setItem("myLeads", myLeads)
    
   
    
    // To verify that it works:
    console.log( "localstorage: "+localStorage.getItem("myLeads") )
    console.log("type: " + typeof myLeads, myLeads )

    myLeads = JSON.parse(myLeads)

    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
