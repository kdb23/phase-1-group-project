fetch('http://localhost:3000/exercises')
    .then(r => r.json())
    .then(exercises => {
       exercises.forEach(renderExercises)
    })

const beginner = document.getElementById('beginner')
const intermediate = document.getElementById('intermediate')
const expert = document.getElementById('expert')



function renderExercises(exerciseArray) {
    const image = document.createElement('img')
    image.src = exerciseArray.image
    if (exerciseArray.difficulty == 'beginner') {
        beginner.append(image)
    } else if ( exerciseArray.difficulty == 'intermediate') {
        intermediate.append(image)
    } else if ( exerciseArray.difficulty == 'expert') {
        expert.append(image)
    }
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
  
       


gains.addEventListener("click", e => {

// if then exercises === different difficulty   
    exerciseName.innerText = exercises.name
    equipment.innerText = exercises.equipment
    instructions.innerText = exercises.instructions
})
