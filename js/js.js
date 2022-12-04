let bars = document.querySelector(".bars");
let menuactive = document.querySelector(".menu-ac");
let header = document.querySelector(".header");
bars.onclick = function () {
  menuactive.classList.toggle("active");
};

window.onscroll = function (s) {
  let scroll = this.scrollY;
  if (this.scrollY > 60) {
    header.classList.add("none");
  } else {
    header.classList.remove("none");
  }
};
let allNone = document.querySelectorAll(".d-none");
let signIn = document.querySelector(".b-sign");
let signInActive = document.querySelector(".sign-inf");
let markX = document.querySelector(".x-sign");
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

// Shwo Icon In Scroll
let cartFix = document.querySelector(".cart-fix");
window.addEventListener("scroll", function () {
  let scroll = this.scrollY;
  if (this.scrollY > 80) {
    cartFix.classList.add("active");
  } else {
    cartFix.classList.remove("active");
  }
});

// let cartActive = document.querySelector("");
let addcart = document.querySelectorAll(".add-cart .b-all");

// Show Content
let removeXcart = document.querySelector(".x-cart");
let cartContent = document.querySelector(".cart-d .content");
let showCart = document.querySelectorAll(".show-cart");
removeXcart.onclick = function () {
  cartContent.classList.remove("active");
};
showCart.forEach(function (a) {
  a.onclick = function () {
    cartContent.classList.add("active");
  };
});
// Remove Box From Content
let cartRemove = document.querySelectorAll(".x-product");
cartRemove.forEach(function (a) {
  a.onclick = function (c) {
    this.parentElement.classList.add("remove");
    cartshowNum();
    removeCart(this);
  };
});

function removeCart(a) {
  setTimeout(function () {
    a.parentElement.remove();
  }, 400);
}
// Count Box
let cartBox = document.querySelectorAll(".cart-d .content .box");
function cartBoxCount() {
  let cs = 0;
  cartBox.forEach(function () {
    cs++;
  });
  return cs;
}
// Show Number Count In span
let cartCount = document.querySelectorAll(".cart-count");
function cartshowNum() {
  cartCount.forEach(function (c) {
    c.textContent = cartBoxCount();
  });
}

window.onload = function () {
  cartshowNum();
};

let forgetShow = document.querySelector(".forget-s");
let forgot = document.querySelector(".forgot");
let signin = document.querySelector(".signin");

let backforgot = document.querySelector(".back-forgot");
forgot.onclick = function () {
  signin.classList.add("none");
  forgetShow.classList.add("active");
};

backforgot.onclick = function () {
  signin.classList.remove("none");
  forgetShow.classList.remove("active");
};
