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

function clickAccor(s) {
  $accordionP.forEach((val) => {
    val.classList.remove("visible");
    val.classList.add("invisible");
    val.classList.remove("h-fit");
    val.classList.remove("px-4");
    val.classList.remove("py-5");
    val.classList.add("h-0");
  });
  let $p = s.parentElement.children[1];
  $p.classList.remove("h-0");
  $p.classList.remove("invisible");
  $p.classList.add("visible");
  $p.classList.add("h-fit");
  $p.classList.add("px-4");
  $p.classList.add("py-5");
}
