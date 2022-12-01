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
let allNone = document.querySelectorAll(".d-none");
let signIn = document.querySelector(".b-sign");
let signInActive = document.querySelector(".sign-inf");
let markX = document.querySelector(".mark-x");
signIn.onclick = function () {
  // allNone.forEach(function (e) {
  //   e.classList.add("active");
  // });
  signInActive.classList.toggle("active");
};

markX.onclick = function () {
  // allNone.forEach(function (e) {
  //   e.classList.remove("active");
  // });
  signInActive.classList.toggle("active");
};

let eye = document.querySelector(".eye");
let eyed = document.querySelectorAll(".eye i");
let pass = document.querySelector(".pass");

eye.onclick = function (e) {
  eyed.forEach(function (e) {
    e.classList.toggle("d-none");
  });
  if (pass.getAttribute("type") == "password") {
    pass.setAttribute("type", "text");
  } else if (pass.getAttribute("type") == "text") {
    pass.setAttribute("type", "password");
  }
};
