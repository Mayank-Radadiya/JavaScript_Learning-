var a = gsap.timeline();

gsap.to("#page0",{
    top:"-100%", 
    duration:1,
    delay:0.5,
    ease:"expo.out"
})
a.from("#loader video",{
    top:"-100%", 
    duration:1,
    delay:0.5,
    ease:"expo.out"
})
a.to("#page1",{
    top:"-100%", 
    duration:1,
    delay:0.8,
    ease:"expo.out"
})
