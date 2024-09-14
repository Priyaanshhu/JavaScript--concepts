// CLICK EVENT ON MULTIPLE BUTTONS

const allButtons = document.querySelectorAll(".my-buttons button");

// Way 1:
// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// Way 2:
// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

// Way 3:
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this.textContent);
        });
})
