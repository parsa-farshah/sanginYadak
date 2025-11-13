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
