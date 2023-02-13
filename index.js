fetch('http://localhost:3000/exercises')
    .then(r => r.json())
    .then(data => console.log(data))

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