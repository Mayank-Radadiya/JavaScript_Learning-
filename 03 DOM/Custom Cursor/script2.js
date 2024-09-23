var main = document.querySelector("#main");
var mouse = document.querySelector("#cursor");

main.addEventListener("mousemove", function (event) {
  mouse.style.left = event.x + -15 + "px";
  mouse.style.top = event.y + -15 + "px";
});


//mouse move using Gsap.
// main.addEventListener("mousemove", function(event){
//   gsap.to("#cursor",{
//     x: event.x,
//     y: event.y,
//     ease: "back.out",
//     duration:0.5
//   })
// })