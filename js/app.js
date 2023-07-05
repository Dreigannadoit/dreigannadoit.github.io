const nav = document.getElementById("nav");
const navHam = document.getElementById("nav-ham");
const navHamContent = document.getElementById("nav-ham-content");

// handles navigation
prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  // when user scrolls down -> add class sticky to nav 
  if (window.scrollY > 0) {
    nav.classList.add('sticky');

    // if the user scroolls down -> hide nav
    if (prevScrollpos > currentScrollPos) {
      nav.classList.remove('hide-nav');
    }

    // but if user scrolls up -> show nav
    else {
      nav.classList.add('hide-nav');
    }
  }

  else {
    nav.classList.remove('sticky');
  }

  prevScrollpos = currentScrollPos;
}



// handles when the user clicks the hamburger
navHam.addEventListener("click", openNav);

function openNav() {
  navHam.classList.toggle("active")
  navHamContent.classList.toggle("active")
}



const skillsTabOpen = document.getElementById("skills-info");
const skillsTabExit = document.getElementById("skillsTabExit");
const skillsTab = document.getElementById("skill");

// handles skill section
skillsTabOpen.addEventListener("click", openProfeTab);
skillsTabExit.addEventListener("click", openProfeTab);

function openProfeTab() {
  skillsTabOpen.classList.add("active")
  skillsTab.classList.toggle("active")
}



// type writter
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['affordable', 'made fast', 'Creative', 'elegant ', 'interactive', 'Eye catching'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 800; // Delay between current and next text
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