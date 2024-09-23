var time = gsap.timeline();

time.from("nav h1", {
  y: -100,
  opacity: 0,
  ease: Power1.easeOut,
  duration: 1,
  delay: 0.8,
});

time.from("#text h1", {
  x: -900,
  duration: 2,
  opacity: 0,
});

time.from("#text h2", {
  x: 900,
  duration: 2,

  opacity: 0,
});
