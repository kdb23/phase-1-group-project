fetch('http://localhost:3000/exercises')
    .then(r => r.json())
    .then(exercises => {
       exercises.forEach(renderExercises)
       submitEvent
    })

const beginner = document.getElementById('beginner')
const intermediate = document.getElementById('intermediate')
const expert = document.getElementById('expert')
const gainsForm = document.getElementById("gains_form")



function renderExercises(exerciseArray) {
    const image = document.createElement('img')
    image.src = exerciseArray.image
    if (exerciseArray.difficulty == 'beginner' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "block"
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'beginner' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "block"
        intermediate.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        intermediate.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "block"
        expert.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        expert.append(image)
    }   
    

}
const submitEvent = gainsForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const chest = document.getElementById("chest")
    const glutes = document.getElementById("glutes")
    const muscle = document.getElementById("muscle")
    const chestClass = document.getElementsByClassName("chest")
    const glutesClass = document.querySelectorAll(".glutes")
    const chestArray = Array.from(chestClass)
    const glutesArray = Array.from(glutesClass)
    if (chest.value === "chest") {
        console.log(chestArray)
    } 
    if (glutes.value === "glutes") {
        console.log(glutesArray)
    }

    
    
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
  
       

