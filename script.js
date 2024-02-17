let tl = gsap.timeline();

tl.from("h3", {
  y: -70,
  duration: 1.2,
  delay: 0.3,
  opacity: 1,
  stagger: 0.2,
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
  delay: 0,
  stagger: 0.4,
});
tl.from(".image2", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.2,
  stagger: 1,
});
tl.from(".image3", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.2,
  stagger: 1.3,
});
tl.from(".image4", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.2,
  stagger: 1.5,
});
tl.from(".image5", {
  x: 80,
  rotate: 45,
  duration: 0.5,
  opacity: 0,
  delay: 0.2,
  stagger: 1.7,
});

// section circle

// gsap.from("#section2 #box", {
//   rotation: 720,
//   scale: 1,
//   duration: 2,
//   delay: 0.5,
//   scrollTrigger: "#section2 #box",
// });
// gsap.from("#section3 #box", {
//   rotation: 720,
//   scale: 1,
//   duration: 1,
//   delay: 0.1,
//   scrollTrigger: "#section3 #box",
// });
// gsap.from("#section4 #box", {
//   rotation: 720,
//   scale: 1,
//   duration: 1,
//   delay: 0.5,
//   scrollTrigger: "#section4 #box",
// });

// gsap.from("#section2 #box", {
//   rotation: 720,
//   scale: 3,
//   duration: 2,
//   scroller:"body",
//   scrollTrigger: {
//     trigger: "#section2 #box",
//     // markers: true,
//     start: "top 60%",
//     scrub:5
//   }
// });
// gsap.from("#section3 #box", {
//   rotation: 720,
//   scale: 1,
//   duration: 1,
//   scroller:"body",
//   scrollTrigger: {
//     trigger: "#section3 #box",
//     // markers: true,
//     start: "top 60%",
//     scrub: 5,
//   },
// });
// gsap.from("#section4 #box", {
//   rotation: 720,
//   scale: 1,
//   duration: 1,
//   scroller:"body",
//   scrollTrigger: {
//     trigger: "#section4 #box",
//     // markers: true,
//     start: "top 90%",
//     scrub: 5,
//   },
// });

// section images

gsap.to("#section2 .img1", {
  width: "100%",
  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    // markers:true,
    start: "top 0%",
    end: "top -100%",
    scrub: 5,
    pin: true,
  },
});
gsap.to("#section3 .img2", {
  width: "80%",
  scrollTrigger: {
    trigger: "#section3",
    scroller: "body",
    // markers:true,
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});

// Horizontal Scroll

gsap.to("#section4 p", {
  transform: "translateX(-56%)",
  scrollTrigger: {
    trigger: "#section4",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});