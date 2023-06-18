const abouts = document.querySelectorAll(".about");
const projects = document.querySelectorAll(".block-content");

const observerNoLoopSection = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    entry.target.classList.toggle("show", entry.isIntersecting)

    if (entry.isIntersecting) observerNoLoopSection.unobserve(entry.target)

  })
}, {
  threshold: 0.65,
});


const observerLoopSection = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    entry.target.classList.toggle("show", entry.isIntersecting)
  })
}, {
  threshold: 0.2,
});



abouts.forEach(about => {
  observerNoLoopSection.observe(about)
})

projects.forEach(project => {
  observerLoopSection.observe(project)
})

