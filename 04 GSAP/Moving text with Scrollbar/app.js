// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



//----------------------------------------------------------------------------------------

var time = gsap.timeline()

time.from("#page1 h1",{
    x:-200,
    duration:1.2,
    ease:"ease-in",
    opacity:0
})
time.from("#page1 h2",{
    y:-200,
    duration:0.8,
    ease:"ease-in",
    opacity:0
})
time.from("#page1 h3",{
    x:200,
    duration:0.7,
    ease:"ease-in",
    opacity:0
})
time.from("#page1 h4",{
    y:200,
    duration:0.8,
    ease:"ease-in",
    opacity:0
})




gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    fontWeight:100,
    duration:10,
    stagger:3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 10%",
        // markers:true,
        end:"top -30%",
        scrub:5,
        pin:true
    }
})