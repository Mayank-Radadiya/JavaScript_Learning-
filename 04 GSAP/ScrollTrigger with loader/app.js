gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function a(){
    var num = 0
    setInterval(function(){
        num = num + Math.floor(Math.random()*20)
        if(num<100){

            document.querySelector("#loader h1").innerHTML=num +"%"
        }else{

            num = 100
            document.querySelector("#loader h1").innerHTML=num +"%"
        }

    },100)
}
a()

var time = gsap.timeline()
time.to("#loader",{
    y:"-100vh",
    duration:1.7,
    delay:1
})

time.from("#page1 h1",{
    y: -200,
    opacity: 0,
    duration: 1,
    delay:0,
    ease:"power2.inOut"
})
time.from("#page1 p",{
    x: -200,
    opacity: 0,
    duration: 0.5,
    ease:"power1.inOut"
})
time.from("#page1 h2",{
    y: 200,
    opacity: 0,
    scale:0,
    duration: 0.8,
    ease:"power1.inOut"
})

gsap.from("#img1 img,#img2 img,#img3 img",{
    x:-100,
    scale:0,
    opasity:0,
    duration: 1.3,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"main",
        markers:true,
        start:"top 100%",
        end:"top 50%",
        scrub:3
    }
})

gsap.from("#box",{
    x:-100,
    scale:0,
    opasity:0,
    duration: 1.3,
    rotate:360,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "main",
        markers: true,
        start:"top 60%",
        end:"top 50%",
        scrub: 5
      }
    })

    