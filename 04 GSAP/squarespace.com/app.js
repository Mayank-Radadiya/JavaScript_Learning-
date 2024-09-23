var time = gsap.timeline()

gsap.from("nav img ,#nav-part2 h2, #nav-part3", {
    y: -100,
    duration: 1,
    ease: "power1.inOut",
    opacity:0,
    stagger:0.3
})
gsap.from("#img1,#img2,#img3",{
    duration: 1,
    opacity:0,
    scale:0,
    delay:1.5,
    stagger:0.4
})

time.from("#page1 h1,span",{
    duration: 1,
    y:-300,
    opacity:0,
    scale:0,
    delay:2,
    stagger:0.3
})

gsap.from("#bottom h5",{
    duration: 1.3,
    y:25,
    delay:4,
    repeat: -1,
    yoyo:true
})


// mouse movement
var main = document.querySelector("#main")
var mouse = document.querySelector("#mouse-move")

main.addEventListener("mousemove", function(dets){
    mouse.style.left = dets.x + -20 + "px"
    mouse.style.top = dets.y + -20 + "px"
})