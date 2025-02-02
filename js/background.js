const videoBg = document.getElementById("video-bg");
const bgButtons = document.querySelectorAll(".bg-btn");

bgButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedBg = button.dataset.bg;
    videoBg.src = `gallery/${selectedBg}`;
    localStorage.setItem("selectedBackground", selectedBg);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const savedBg = localStorage.getItem("selectedBackground");
  if (savedBg) {
    videoBg.src = `gallery/${savedBg}`;
  }
});
