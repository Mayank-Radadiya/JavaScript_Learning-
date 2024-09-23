gsap.to("#box", {
  x: 500,
  y: 300,
  duration: 1.3,
  delay: 1,
  backgroundColor: "#ce38c2",
  scale: 0.7,
  color: "#111",
  repeat: -1,//-1 for infinity. 0 for no repetition.
  
  yoyo: true, // yoyo use for animation start to end and agint strat from end.
  
  
  stagger:0.5  // when in one div more then one that time elements is display one by one after 0.5s.
 
}); // to use for starting stage to final stage.



// gsap.from("#box",{
//     x:500,
//     y:300,
//     duration:1.3,
//     delay:1,
//     backgroundColor: "#ce38c2",
//     scale:0.7,
//     color:"#111"
//     repeat:-1
// })
// from use for final to starting stage.



// one by one execute
var a = gsap.timeline();

a.to(" #text h1", {
  x: 300,
  duration: 1.3,
  delay: 1,
});
a.from("h2", {
  x: 300,
  duration: 1.3,
});
