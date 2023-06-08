const hiddens = document.querySelectorAll(".hidden");
const abouts = document.querySelectorAll(".about");
const contacts = document.querySelectorAll(".contact");


const observerLoopSection = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
}, {
  threshold: 0.45,
});


const observerNoLoopSection = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    entry.target.classList.toggle("show", entry.isIntersecting)

    if (entry.isIntersecting) observerNoLoopSection.unobserve(entry.target)

  })
}, {
  threshold: 0.65,
});


const observerLiks = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    aboutLinks.classList.toggle("trans", entry.isIntersecting)
  })
}, {
  threshold: 0.40,
});



hiddens.forEach(hidden => {
  observerLoopSection.observe(hidden)
})

abouts.forEach(about => {
  observerNoLoopSection.observe(about)
  observerLiks.observe(about)
})

contacts.forEach(contact => {
  observerLiks.observe(contact)
})

