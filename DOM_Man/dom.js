var button = document.querySelector("body");

console.log(button);

var clickedBefore = false;

button.addEventListener("click", function(){

    if(clickedBefore) {
        button.style.background = "white";
    }
    else{
        button.style.background = "yellow";
    }
    clickedBefore = !clickedBefore;

    
});