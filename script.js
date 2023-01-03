const targetedElements = document.querySelectorAll(".hidden"); //this just assigns a variable to all the parts we want to work with 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  })
})

//targetedElements.forEach((el) => observer.observe(el));
targetedElements.forEach(((el, i) => {
  el.style.transitionDelay = i*200 + "ms";
  observer.observe(el);
}))

// let options = {
//     root: $("body"),
//     rootMargin: '0px',
//     threshold: 1.0
// }

// let callback = (entries, observer) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("show", entry.isIntersecting);
//       // Each entry describes an intersection change for one observed target element:
//       //   entry.boundingClientRect
//       //   entry.intersectionRatio
//       //   entry.intersectionRect
//       //   entry.isIntersecting
//       //   entry.rootBounds
//       //   entry.target
//       //   entry.time
//     });
// };

// let observer = new IntersectionObserver(callback, options);

// observer.observe(targetedElements);