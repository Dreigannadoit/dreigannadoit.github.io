const profOpen = document.getElementById("skills-hero");
const profClose = document.getElementById("profeciency-tab");

profOpen.onclick = function () { toggleprofe() };
profClose.onclick = function () { toggleprofe() };

function toggleprofe() {
  profClose.classList.toggle('profeToggle');
  profOpen.classList.add('noMore');
}
