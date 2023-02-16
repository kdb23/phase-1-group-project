const beginner = document.getElementById('beginner')
const intermediate = document.getElementById('intermediate')
const expert = document.getElementById('expert')
const gainsForm = document.getElementById("gains_form")
const beginnerInfo = document.getElementById("beginnerInfo")
const intermediateInfo = document.getElementById("intermediateInfo")
const expertInfo = document.getElementById("expertInfo")
const numLikes = document.getElementById('numLikes')
const likesBtn = document.getElementById('likes')
let value = parseInt(numLikes.innerText)

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//Button
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
likesBtn.addEventListener('click', (e) => {
    value++
    numLikes.innerText = value
})

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//Muscle Selector
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
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
    

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//Render Exercise Image/Info
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function renderExercises(exerciseArray) {
    const image = document.createElement('img')
    const nameLi = document.createElement('li')
    const infoLi = document.createElement('li')
    image.src = exerciseArray.image
    image.alt = exerciseArray.name
    
    if (exerciseArray.difficulty == 'beginner' && exerciseArray.muscle == "chest") {
        muscleStyleClass(exerciseArray.muscle)
        beginnerInfo.append(nameLi, infoLi)
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'beginner' && exerciseArray.muscle == "glutes") {
        muscleStyleClass(exerciseArray.muscle)
        beginnerInfo.append(nameLi, infoLi)
        beginner.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "chest") {
        muscleStyleClass(exerciseArray.muscle)
        intermediateInfo.append(nameLi, infoLi)
        intermediate.append(image)
    } else if (exerciseArray.difficulty == 'intermediate' && exerciseArray.muscle == "glutes") {
        muscleStyleClass(exerciseArray.muscle)
        intermediateInfo.append(nameLi, infoLi)
        intermediate.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "chest") {
        muscleStyleClass(exerciseArray.muscle)
        expertInfo.append(nameLi, infoLi)
        expert.append(image)
    } else if ( exerciseArray.difficulty == 'expert' && exerciseArray.muscle == "glutes") {
        muscleStyleClass(exerciseArray.muscle)
        expertInfo.append(nameLi, infoLi)
        expert.append(image)
    }
    image.addEventListener("mouseover", (e) => {
        if (e.target.src === "https://media2.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif?cid=ecf05e478kgm8ozhfrjdecouhm3nik2ew1f5c1rnr3ddmlhc&rid=giphy.gif&ct=g") {
            blockDisplay();
        } 
        if (e.target.src === "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Smalb%C3%A4nk.gif?resize=600%2C600&ssl=1") {
            blockDisplay();
        } 
        if (e.target.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3gVua4VSOcUTYmUbKO-2aY4esfaDnyPT9A&usqp=CAU") {
            blockDisplay();
        } 
        if (e.target.src === "https://media.self.com/photos/57aa008dd077f2273cf20476/master/w_1600%2Cc_limit/STEP_UP_KNEE_LIFT.gif") {
            blockDisplay();
        } 
        if (e.target.src === "https://assets.myworkouts.io/exercises-media/mGKGRBCHDAscPj8Bk/kneeling_squat_female_v16_gif_capoff.gif") {
            blockDisplay();
        } 
        if (e.target.src === "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barbell-exercises-hip-thrust-1549030719.gif?resize=480:*") {
            blockDisplay();
        } 
    })
    image.addEventListener("mouseleave", (e) => {
        if (e.target.src === "https://media2.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif?cid=ecf05e478kgm8ozhfrjdecouhm3nik2ew1f5c1rnr3ddmlhc&rid=giphy.gif&ct=g") {
            noneDisplay();
        } 
        if (e.target.src === "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Smalb%C3%A4nk.gif?resize=600%2C600&ssl=1") {
            noneDisplay();
        } 
        if (e.target.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3gVua4VSOcUTYmUbKO-2aY4esfaDnyPT9A&usqp=CAU") {
            noneDisplay();
        } 
        if (e.target.src === "https://media.self.com/photos/57aa008dd077f2273cf20476/master/w_1600%2Cc_limit/STEP_UP_KNEE_LIFT.gif") {
            noneDisplay();
        } 
        if (e.target.src === "https://assets.myworkouts.io/exercises-media/mGKGRBCHDAscPj8Bk/kneeling_squat_female_v16_gif_capoff.gif") {
            noneDisplay();
        } 
        if (e.target.src === "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/barbell-exercises-hip-thrust-1549030719.gif?resize=480:*") {
            noneDisplay();
        }
    })
    
    function muscleStyleClass(muscle) {
        image.className = `${muscle}`
        image.style.display = "none"
        nameLi.className = `${muscle}Mouse`
        nameLi.style.display = "none"
        infoLi.className = `${muscle}Mouse`
        infoLi.style.display = "none"
        nameLi.innerText = exerciseArray.name
        infoLi.innerText = exerciseArray.instructions
    }
    function blockDisplay() {
        nameLi.style.display = "block";
        infoLi.style.display = "block";
        }
    function noneDisplay() {
        nameLi.style.display = "none";
        infoLi.style.display = "none";
    }
}