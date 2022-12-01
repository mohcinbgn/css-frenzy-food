let bars = document.querySelector(".bars");
let menuactive = document.querySelector(".menu-ac");
let header = document.querySelector(".header");
bars.onclick = function () {
  menuactive.classList.toggle("active");
};
window.onscroll = function (s) {
  let scroll = this.scrollY;
  console.log(scroll);
  if (this.scrollY > 50) {
    header.classList.add("none");
  } else {
    header.classList.remove("none");
  }
};
