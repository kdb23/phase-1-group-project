fetch('http://localhost:3000/exercises')
    .then(r => r.json())
    .then(exercises => {
        console.log(exercises)
        renderChest(exercises)
    })

// hi everyone!!!!!
/* 
Project Requirements
    -HTML/CSS/JS    DONE
    
    -API or db.json
        -atleast 5 Objects with 3 attributes
        -must be asynchronous and use JSON format
    
    -entire app must include 3 distinct event listeners
        -each event listener should have its own unique callback func
        -click, submit, mouseover
            -submit (search function to filter with specific dropdown list of excercises)
            -click event (pulling up a card of the chosen difficulty of exercise)
            -mouseover (showing gif of the specific exercise)
*/

const muscle = document.getElementById("muscle")
const chest = document.getElementById("chest")
const glutes = document.getElementById("glutes")
const gains = document.getElementById("gains")
const beginnerDiv = document.getElementById("beginner")
const intermediateDiv= document.getElementById("intermediate")
const expertDiv = document.getElementById("expert")
const exerciseName = document.getElementById("name")
const equipment = document.getElementById("equipment")
const instructions = document.getElementById("instructions")

gains.addEventListener("click", e => {
    
// if then exercises === different difficulty   
    exerciseName.innerText = exercises.name
    equipment.innerText = exercises.equipment
    instructions.innerText = exercises.instructions
})

function renderChest(exercises) {
    // const imgBeginner = document.createElement("img")
    // const imgIntermediate = document.createElement("img")
    // const imgExpert = document.createElement("img")
    // imgBeginner.src = exercises.image
    // beginnerDiv.append(imgBeginner)
    // imgIntermediate.src = exercises.image
    // intermediateDiv.append(imgIntermediate)
    // imgExpert.src = exercises.image
    // expertDiv.append(imgExpert)
    const muscleObj = exercises.muscle
    function ifChest() {
        if (muscleObj == "chest") {
            return true
        }
    }
    const chestFilter = exercises.filter(ifChest)
    console.log(chestFilter)
}
function renderGlutes(exercisesArray) {
    // const imgBeginner = document.createElement("img")
    // const imgIntermediate = document.createElement("img")
    // const imgExpert = document.createElement("img")
    // imgBeginner.src = exercises.image
    // beginnerDiv.append(imgBeginner)
    // imgIntermediate.src = exercises.image
    // intermediateDiv.append(imgIntermediate)
    // imgExpert.src = exercises.image
    // expertDiv.append(imgExpert)
}