let $navMobBg = document.querySelector("#navMobBg");
let $navMob = document.querySelector("#navMob");
let $navBtn = document.querySelector("#navBtn");
let $closeMenuBtn = document.querySelector("#closeMenuBtn");

////////////////////////////////////// bar click
$navBtn.addEventListener("click", () => {
  // bg mobile menu
  $navMobBg.classList.remove("left-[130%]");
  $navMobBg.classList.add("left-0");
  // mobile menu
  $navMob.classList.remove("left-[150%]");
  $navMob.classList.add("left-[30%]");
});

////////////////////////////////////// close bar click
$closeMenuBtn.addEventListener("click", () => {
  // bg mobile menu
  $navMobBg.classList.remove("left-0");
  $navMobBg.classList.add("left-[130%]");

  // mobile menu
  $navMob.classList.remove("left-[30%]");
  $navMob.classList.add("left-[150%]");
});

/////////////////////////////////////////////////////////////// accordion

let $accordionWrapper = document.querySelector("#accordionWrapper");
let $accordionP = document.querySelectorAll("#accordionWrapper>div>p");
let $accordionDiv = document.querySelectorAll("#accordionWrapper>div>div");
let $accordionSpan = document.querySelectorAll(
  "#accordionWrapper>div>div>span"
);
let $accordionImg = document.querySelectorAll("#accordionWrapper>div>div>img");

function clickAccor(s) {
  // reseting
  $accordionP.forEach((val) => {
    val.classList.remove("visible");
    val.classList.add("invisible");
    val.classList.remove("h-fit");
    val.classList.remove("px-4");
    val.classList.remove("py-5");
    val.classList.add("h-0");
  });
  $accordionDiv.forEach((val) => {
    val.classList.remove("bg-black");
    val.classList.add("border-orangeFv");
  });
  $accordionSpan.forEach((val) => {
    val.classList.remove("text-white");
    val.classList.add("text-black");
  });
  $accordionImg.forEach((val) => {
    val.setAttribute("src", "src/icons/plus.png");
  });
  // end reseting
  let $divParent = s.parentElement.children[0];
  let $divSpan = s.parentElement.children[0].children[0];
  let $icon = s.parentElement.children[0].children[1];
  let $p = s.parentElement.children[1];
  $divParent.classList.add("bg-black");
  $divParent.classList.remove("border-orangeFv");
  $icon.setAttribute("src", "src/icons/minus.png");
  $divSpan.classList.add("text-white");
  $p.classList.remove("h-0");
  $p.classList.remove("invisible");
  $p.classList.add("visible");
  $p.classList.add("h-fit");
  $p.classList.add("px-4");
  $p.classList.add("py-5");
}

// swiper
//  Initialize Swiper
// Thumbnail slider
var swiperThumbs = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Main slider with thumbnails
var swiperMain = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumbs,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Another standalone slider (if needed)
var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});