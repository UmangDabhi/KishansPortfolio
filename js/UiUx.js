
function redirectToNextPage() {
  window.location.href = "Contact.html";
}

let flag = 0;

// Event listener for spacebar key press
window.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    logic();
  }
});
function logic(){
  if (flag === 1) {
    redirectToNextPage();
  } else {
    document.querySelector(".vid-container").style.animation =
      "slideUp 1s forwards";
    show();
  }
}

let index = 0;
function show() {
  const videoSource = ["../Assets/v3.mp4","../Assets/v4.mp4","../Assets/v2.mp4", "../Assets/v1.mp4",];
  const videoTitle = ["Shoes WebPage","Coffee App","Gujarat Tourism", "Cafe Ad"];
  const vid = document.querySelector(".vid");
  const vidSource = document.getElementById("vidSource");
  const vidTitle = document.getElementById("vidTitle");

  function nextVid() {
    if (index >= videoSource.length) {
      flag = 1; // Set flag to 1 after all videos are played
    } else {
      vidTitle.textContent = videoTitle[index];
      vidSource.src = videoSource[index++];
      vid.load();
    }
  }
  nextVid();
}
