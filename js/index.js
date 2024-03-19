const animText = ["Designer", "Prototyper", "UI-UX", "Singer"];
let index = 0;

const laptop = document.getElementById("laptop");
const scrollingTextElement = document.querySelector(".gradient-text");
const btn_go = document.getElementById("btn_go");

function animateText() {
  document.querySelector("body").style.animation = "zoom 1s forwards";
  laptop.style.animation = "textAnimation 1s forwards";
  const textInterval = setInterval(() => {
    if (index == animText.length) {
      index = 0;
    }
    scrollingTextElement.textContent = animText[index];
    scrollingTextElement.classList.add("scroll-up");
    index++;
  }, 2000);
  laptop.removeEventListener("mouseover", animateText);
}
laptop.addEventListener("mouseover", animateText);
if (window.innerWidth <= 768) {
  animateText(); // If in mobile view, start the animation directly
}
btn_go.addEventListener("click", function () {
  window.location.href = "html/main.html";
});
