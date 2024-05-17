// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById('container')

function render(images) {
    let list = ""
    for(i = 0; i < images.length; i++){
        list += `<img alt="Emplyee" class="team-img" src="${images[i]}">`
    }
    container.innerHTML = list
}
render(imgs)

// function renderDos(images) {
//     let list = images.map(img => `<img class="team-img" src="${img}">`).join('');
//     container.innerHTML = list;
// }

// renderDos(imgs);

//Peter Son
