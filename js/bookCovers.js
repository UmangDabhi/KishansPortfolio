
function redirectToNextPage() {window.location.href = "UiUx.html";
}

document.documentElement.style.setProperty('--pic-count', 7);
// Event listener for spacebar key press
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
    "../Assets/b1.jpg",
    "../Assets/b2.jpg",
    "../Assets/b3.jpg",
    "../Assets/b4.jpg",
    "../Assets/b5.jpg",
    "../Assets/b6.jpg",
    "../Assets/b7.jpg",
    "../Assets/b1.jpg",
    "../Assets/b2.jpg",
    "../Assets/b3.jpg",
    "../Assets/b4.jpg",
    "../Assets/b5.jpg",
    "../Assets/b6.jpg",
    "../Assets/b7.jpg",
  ];

  const slider = document.querySelector(".slider");

  // Create slides dynamically from imageSources array
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
