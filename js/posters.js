
function redirectToNextPage() {
  window.location.href = "bookCovers.html";
}
document.documentElement.style.setProperty('--pic-count', 6);
let flag = 0;

// Event listener for spacebar key press
window.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    logic();
  }
});
function logic(){
  console.log(flag);
    if (flag == 0) {
      flag = 1;
      document.querySelector(".slider-container").style.animation =
        "slideUp 1s forwards";
      show();
    } else if (flag == 1) {
      redirectToNextPage();
    }
}

function show() {
  const imageSources = [
    "../Assets/p1.jpg",
    "../Assets/p2.jpg",
    "../Assets/p3.jpg",
    "../Assets/p4.jpg",
    "../Assets/p5.jpg",
    "../Assets/p6.jpg",
    "../Assets/p7.jpg",
    "../Assets/p8.jpg",
    "../Assets/p1.jpg",
    "../Assets/p2.jpg",
    "../Assets/p3.jpg",
    "../Assets/p4.jpg",
    "../Assets/p5.jpg",
    "../Assets/p6.jpg",
    "../Assets/p7.jpg",
    "../Assets/p8.jpg",
  ];

  const slider = document.querySelector(".slider");

  imageSources.forEach((src) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Slide Image";
    slide.appendChild(img);
    slider.appendChild(slide);
  });

}
