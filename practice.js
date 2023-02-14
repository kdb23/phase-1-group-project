fetch('http://localhost:3000/exercises')
    .then(r => r.json())
    .then(exercises => {
        const newArray = exercises.filter( exercises => {
            chestClass(exercises)
            if (exercises.difficulty == "beginner" && exercises.muscle == "chest") {
                beginnerDiv.append(img)
                img.src = exercises.image
            }
            if (exercises.difficulty == "intermediate" && exercises.muscle == "chest") {
                intermediateDiv.append(img2)
                img2.src = exercises.image
            }
            if (exercises.difficulty == "expert" && exercises.muscle == "chest") {
                expertDiv.append(img3)
                img3.src = exercises.image
            }
        })
    }
    )
    function chestClass(exercise) {
        const array = []
        if (exercise.difficulty == "beginner" && exercise.muscle == "chest") {
                return exercise
            } else if (exercise.difficulty == "intermediate" && exercise.muscle == "chest") {
                return exercise
            } else if (exercise.difficulty == "expert" && exercise.muscle ==="chest")
                return array
    }
    
    function glutesClass(exercise) {
        if (exercise.difficulty == "beginner" && exercise.muscle == "glutes"
            ||
            exercise.difficulty == "intermediate" && exercise.muscle == "glutes"
            ||
            exercise.difficulty == "expert" && exercise.muscle == "glutes")
                return exercise
    }


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
       const img = document.createElement("img")
       const img2 = document.createElement("img")
       const img3 = document.createElement("img")
       


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
    const beginner = beginnerDiv.append(img)
    const intermediate = intermediateDiv.append(img)
    const expert = expertDiv.append(img)
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