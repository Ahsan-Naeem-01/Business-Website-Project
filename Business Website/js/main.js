let counterNumber = document.querySelectorAll(".number");
let counterSpans = document.querySelectorAll(".num-data");
let interval = 1000;

counterSpans.forEach((counterSpan) => {
  let startValue = 0;
  let endValue = parseInt(counterSpan.getAttribute("data-count"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    counterSpan.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

let counterNumber1 = document.querySelectorAll(".number");
let counterSpans1 = document.querySelectorAll(".num1-data");
let interval1 = 1000;

counterSpans1.forEach((counterSpan1) => {
  let startValue1 = 0;
  let endValue1 = parseInt(counterSpan1.getAttribute("data-count1"));
  let duration1 = Math.floor(interval1 / endValue1);
  let counter1 = setInterval(function () {
    startValue1 += 30;
    counterSpan1.textContent = startValue1;
    if (startValue1 > endValue1) {
      clearInterval(counter1);
    }
  }, 10);
});

// mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
