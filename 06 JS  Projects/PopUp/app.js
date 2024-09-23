let popup1 = document.getElementById("popup-container");
let btn1 = document.getElementById("btn");
let btn2 = document.getElementById("btn-02");


btn1.addEventListener("click", function(){
    popup1.style.top = 50 + "%"
})

btn2.addEventListener("click", function(){
    popup1.style.top = -22 + "%"
   
})

// function openPop(){
//     popup1.classList.add("popup-open");
// }

// function closePop(){
//     popup1.classList.remove("popup-open");
// }

