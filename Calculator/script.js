let string="";

// Query selector will select all those stuff which have class '.button'
let buttons = document.querySelectorAll('.button');

// Make an Array from these buttons
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target)
    })
})