const changeEvent = muscle.addEventListener("change", e => {
    const chestClass = document.getElementsByClassName("chest")
    const glutesClass = document.querySelectorAll(".glutes")
    const chestArray = Array.from(chestClass)
    const glutesArray = Array.from(glutesClass)
    if (e.target.value === "chest") {
        chestArray.forEach(toggleFuncOn);
    } else {
        chestArray.forEach(toggleFuncOff);
    }
    if (e.target.value === "glutes") {
        glutesArray.forEach(toggleFuncOn);
    } else {
        glutesArray.forEach(toggleFuncOff);
    }
    function toggleFuncOn(obj) {
        obj.style.display = "block"
    }
    function toggleFuncOff(obj) {
        obj.style.display = "none"
    }
})

fetch('http://localhost:3000/exercises')
    .then(r => r.json())
    .then(exercises => {
       exercises.forEach(renderExercises)
       changeEvent
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
        image.style.display = "none"
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'beginner' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "none"
        intermediate.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        intermediate.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "none"
        expert.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        expert.append(image)
    }   
    

}

const numLikes = document.getElementById('numLikes')
const likesBtn = document.getElementById('likes')
let value = parseInt(numLikes.innerText)

likesBtn.addEventListener('click', (e) => {
    value++
    numLikes.innerText = value
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
        -click, change, mouseover
        -change (search function to filter with specific dropdown list of excercises)
        -click event (pulling up a card of the chosen difficulty of exercise)
        -mouseover (showing gif of the specific exercise)
        */
  
       

