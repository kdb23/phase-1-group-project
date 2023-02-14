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
       exercises.forEach(renderExercises);
       changeEvent;
    })

const beginner = document.getElementById('beginner')
const intermediate = document.getElementById('intermediate')
const expert = document.getElementById('expert')
const gainsForm = document.getElementById("gains_form")
const beginnerInfo = document.getElementById("beginnerInfo")
const intermediateInfo = document.getElementById("intermediateInfo")
const expertInfo = document.getElementById("expertInfo")


function renderExercises(exerciseArray) {
    const image = document.createElement('img')
    const nameLi = document.createElement('li')
    const infoLi = document.createElement('li')
    image.src = exerciseArray.image
    if (exerciseArray.difficulty == 'beginner' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "none"
        nameLi.className = "chestMouse"
        nameLi.style.display = "none"
        infoLi.className = "chestMouse"
        infoLi.style.display = "none"
        nameLi.innerText = exerciseArray.name
        infoLi.innerText = exerciseArray.instructions
        beginnerInfo.append(nameLi, infoLi)
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'beginner' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        nameLi.className = "glutesMouse"
        nameLi.style.display = "none"
        infoLi.className = "glutesMouse"
        infoLi.style.display = "none"
        nameLi.innerText = exerciseArray.name
        infoLi.innerText = exerciseArray.instructions
        beginnerInfo.append(nameLi, infoLi)
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "none"
        nameLi.className = "chestMouse"
        nameLi.style.display = "none"
        infoLi.className = "chestMouse"
        infoLi.style.display = "none"
        nameLi.innerText = exerciseArray.name
        infoLi.innerText = exerciseArray.instructions
        intermediateInfo.append(nameLi, infoLi)
        intermediate.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        nameLi.className = "glutesMouse"
        nameLi.style.display = "none"
        infoLi.className = "glutesMouse"
        infoLi.style.display = "none"
        nameLi.innerText = exerciseArray.name
        infoLi.innerText = exerciseArray.instructions
        intermediateInfo.append(nameLi, infoLi)
        intermediate.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "chest") {
        image.className = "chest"
        image.style.display = "none"
        nameLi.className = "chestMouse"
        nameLi.style.display = "none"
        infoLi.className = "chestMouse"
        infoLi.style.display = "none"
        nameLi.innerText = exerciseArray.name
        infoLi.innerText = exerciseArray.instructions
        expertInfo.append(nameLi, infoLi)
        expert.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "glutes") {
        image.className = "glutes"
        image.style.display = "none"
        nameLi.className = "glutesMouse"
        nameLi.style.display = "none"
        infoLi.className = "glutesMouse"
        infoLi.style.display = "none"
        nameLi.innerText = exerciseArray.name
        infoLi.innerText = exerciseArray.instructions
        expertInfo.append(nameLi, infoLi)
        expert.append(image)
    }
    image.addEventListener("mouseover", (e) => {
        if (e.target.src === "https://media2.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif?cid=ecf05e478kgm8ozhfrjdecouhm3nik2ew1f5c1rnr3ddmlhc&rid=giphy.gif&ct=g") {
            nameLi.style.display = "block";
            infoLi.style.display = "block";
        } 
        if (e.target.src === "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Smalb%C3%A4nk.gif?resize=600%2C600&ssl=1") {
            nameLi.style.display = "block";
            infoLi.style.display = "block";
        } 
        if (e.target.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3gVua4VSOcUTYmUbKO-2aY4esfaDnyPT9A&usqp=CAU") {
            nameLi.style.display = "block";
            infoLi.style.display = "block";
        } 
        if (e.target.src === "https://media.self.com/photos/57aa008dd077f2273cf20476/master/w_1600%2Cc_limit/STEP_UP_KNEE_LIFT.gif") {
            nameLi.style.display = "block";
            infoLi.style.display = "block";
        } 
        if (e.target.src === "https://assets.myworkouts.io/exercises-media/mGKGRBCHDAscPj8Bk/kneeling_squat_female_v16_gif_capoff.gif") {
            nameLi.style.display = "block";
            infoLi.style.display = "block";
        } 
        if (e.target.src === "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barbell-exercises-hip-thrust-1549030719.gif?resize=480:*") {
            nameLi.style.display = "block";
            infoLi.style.display = "block";
        } 
    })
    image.addEventListener("mouseleave", (e) => {
        if (e.target.src === "https://media2.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif?cid=ecf05e478kgm8ozhfrjdecouhm3nik2ew1f5c1rnr3ddmlhc&rid=giphy.gif&ct=g") {
            nameLi.style.display = "none";
            infoLi.style.display = "none";
        } 
        if (e.target.src === "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Smalb%C3%A4nk.gif?resize=600%2C600&ssl=1") {
            nameLi.style.display = "none";
            infoLi.style.display = "none";
        } 
        if (e.target.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3gVua4VSOcUTYmUbKO-2aY4esfaDnyPT9A&usqp=CAU") {
            nameLi.style.display = "none";
            infoLi.style.display = "none";
        } 
        if (e.target.src === "https://media.self.com/photos/57aa008dd077f2273cf20476/master/w_1600%2Cc_limit/STEP_UP_KNEE_LIFT.gif") {
            nameLi.style.display = "none";
            infoLi.style.display = "none";
        } 
        if (e.target.src === "https://assets.myworkouts.io/exercises-media/mGKGRBCHDAscPj8Bk/kneeling_squat_female_v16_gif_capoff.gif") {
            nameLi.style.display = "none";
            infoLi.style.display = "none";
        } 
        if (e.target.src === "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barbell-exercises-hip-thrust-1549030719.gif?resize=480:*") {
            nameLi.style.display = "none";
            infoLi.style.display = "none";
        }
    })
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
  
       

