let tl = gsap.timeline();

tl.from("h3", {
  y: -70,
  duration: 1,
  delay: 0.3,
  opacity: 1,
  stagger: 0.1,
});
// tl.from("#hero .soft", {
//   x: 1,
//   duration: 1,
//   delay: 0.3,
//   opacity: 2,
//   stagger: 1,
// });
tl.from("h1", {
  x: 200,
  duration: 0.7,
  delay: -0.1,
  opacity: -1,
  stagger: 0.5,
});

// -----------------------------------------------------

tl.from(".image", {
  x: 80,
  rotate: 30,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.4,
});
tl.from(".image2", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 1,
});
tl.from(".image3", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 1.3,
});
tl.from(".image4", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 1.5,
});
tl.from(".image5", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 1.7,
});

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
