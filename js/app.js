console.log("AAAAAAAHHHHHH!!!!! WHY ARE YOU LOOKING HERE???!!!!");

const body = document.getElementById("body");

const nav = document.getElementById("nav");

var prevScrollpos = window.pageYOffset; // tf, this declares false? but it still works?
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


// open hamburger function
const navHam = document.getElementById("nav-ham");
const navHamContent = document.getElementById("nav-ham-active");

navHam.addEventListener("click", openNav);

function openNav() {
  navHam.classList.toggle("active")
  navHamContent.classList.toggle("active")
}


// header slide show background
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// open full facilities list function
const facButton = document.getElementById("fac-button");
const fasFullList = document.getElementById("fas-full-list");


facButton.addEventListener("click", openList);

function openList() {
  fasFullList.classList.toggle("active")
}



// open full gallery list function

const galBtn = document.getElementById("gal-btn");
const galFull = document.getElementById("full-gal");
const galExit = document.getElementById("close-gal-btn");

galBtn.addEventListener("click", openGal);
galExit.addEventListener("click", openGal);

function openGal() {
  galFull.classList.toggle("active")
  body.classList.toggle("active")
}



// accordian
const accBlock1 = document.getElementById("block-1");
const accBlock2 = document.getElementById("block-2");
const accBlock3 = document.getElementById("block-3");
const accBlock4 = document.getElementById("block-4");
const accBlock5 = document.getElementById("block-5");

accBlock1.addEventListener("click", openBlockOne);
accBlock2.addEventListener("click", openBlockTwo);
accBlock3.addEventListener("click", openBlockThree);
accBlock4.addEventListener("click", openBlockFour);
accBlock5.addEventListener("click", openBlockFive);

function openBlockOne() {
  accBlock1.classList.toggle("active")
  accBlock2.classList.remove("active")
  accBlock3.classList.remove("active")
  accBlock4.classList.remove("active")
  accBlock5.classList.remove("active")
}

function openBlockTwo() {
  accBlock1.classList.remove("active")
  accBlock2.classList.toggle("active")
  accBlock3.classList.remove("active")
  accBlock4.classList.remove("active")
  accBlock5.classList.remove("active")
}

function openBlockThree() {
  accBlock1.classList.remove("active")
  accBlock2.classList.remove("active")
  accBlock3.classList.toggle("active")
  accBlock4.classList.remove("active")
  accBlock5.classList.remove("active")
}

function openBlockFour() {
  accBlock1.classList.remove("active")
  accBlock2.classList.remove("active")
  accBlock3.classList.remove("active")
  accBlock4.classList.toggle("active")
  accBlock5.classList.remove("active")
}

function openBlockFive() {
  accBlock1.classList.remove("active")
  accBlock2.classList.remove("active")
  accBlock3.classList.remove("active")
  accBlock4.classList.remove("active")
  accBlock5.classList.toggle("active")
}

// Code made by Robert Bamba
// https://github.com/Dreigannadoit