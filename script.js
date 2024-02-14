gsap.from("h3", {
  y: -70,
  duration: 1,
  delay: 0.3,
  opacity: 1,
  stagger: 0.1,
});
gsap.from("#hero .soft", {
  x: 1,
  duration: 2,
  delay: 0.3,
  opacity: 2,
  stagger: 1,
});
gsap.from("h1", {
  x: 200,
  duration: 1.2,
  delay: 0.3,
  opacity: -1,
  stagger: 0.5,
});

// -----------------------------------------------------

gsap.to("#section2 #box1", {
  rotation: 720,
  scale: 1,
  duration: 2,
  delay: 1,
});
gsap.to("#section3 #box2", {
  rotation: 720,
  scale: 1,
  duration: 2,
  delay: 2,
});
gsap.to("#section4 #box3", {
  rotation: 720,
  scale: 1,
  duration: 2,
  delay: 3,
});
