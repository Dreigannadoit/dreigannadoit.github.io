const FBIcons = document.querySelectorAll(".FBIcon");

const FBIconsSticky = document.getElementById("fb-con");

// detects everytime there is fb icon in the content, then removes the sticky fb link
const observerLoopSection = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // entry.target.classList.toggle("show", entry.isIntersecting);
    FBIconsSticky.classList.toggle("hide");

  })
}, {
  threshold: 1,
});

FBIcons.forEach(FBIcon => {
  observerLoopSection.observe(FBIcon)
})