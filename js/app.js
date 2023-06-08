/// nav
const nav = document.getElementById("nav");
const navContainer = document.getElementById("nav-container");
const ham = document.getElementById("ham");
const aboutLink = document.getElementById("about-link");
const projectLink = document.getElementById("projects-link");
const contactsLink = document.getElementById("contacts-link");


// window sizes in current display
let winHeight;
let winWidth;


// toggle nav when hamburger form
ham.onclick = function () { toggelHamNav() };
aboutLink.onclick = function () { toggelHamNav() };
projectLink.onclick = function () { toggelHamNav() };
contactsLink.onclick = function () { toggelHamNav() };

function toggelHamNav() {
  navContainer.classList.toggle('ham-nav-active');
}


//resize of window
function windowSize() {
  prevScrollpos = window.pageYOffset;
  var i = 0;

  winHeight = window.innerHeight;
  winWidth = window.innerWidth;

  if (winWidth <= 700) {
    nav.classList.add('ham-active');
    navContainer.classList.remove('full-screen');

    // disable nav bar on scroll 
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      if (window.scrollY > i) {
        nav.classList.remove('scroll');
      }

      else {
        nav.classList.remove('scroll');
      }

      prevScrollpos = currentScrollPos;
    }
  }

  else if (winHeight >= 701) {
    nav.classList.remove('ham-active');
    navContainer.classList.add('full-screen');

    // activate nav bar on scroll 
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;

      if (window.scrollY > i) {
        nav.classList.add('scroll');

        if (prevScrollpos > currentScrollPos) {
          nav.classList.remove('hide-nav');
        }

        else {
          nav.classList.add('hide-nav');
        }
      }

      else {
        nav.classList.remove('scroll');
      }

      prevScrollpos = currentScrollPos;
    }
  }


}
window.onresize = windowSize;

windowSize();



// Type writer effect - home

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['affordable', 'Fast', 'Creative', 'elegant ', 'interactive'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");

    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);

    charIndex++;
    setTimeout(type, typingDelay);
  }

  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");

    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);

    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;

    if (textArrayIndex >= textArray.length) textArrayIndex = 0;

    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});