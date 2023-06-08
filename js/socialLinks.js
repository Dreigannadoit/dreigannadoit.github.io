const aboutLinks = document.getElementById("social-nav");

window.addEventListener("scroll", function () {
  aboutLinks.classList.toggle('sticky', window.scrollY > 0);
});