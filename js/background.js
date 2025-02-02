const videoBg = document.getElementById("video-bg");
const videoSource = document.getElementById("video-source");
const bgThumbnails = document.querySelectorAll(".bg-thumb");

// Change background video on click
bgThumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const selectedBg = thumb.dataset.bg;
    videoSource.src = `gallery/${selectedBg}`;
    videoBg.load(); // Reload the video to apply changes
    localStorage.setItem("selectedBackground", selectedBg);
  });
});

// Load last selected background
document.addEventListener("DOMContentLoaded", () => {
  const savedBg = localStorage.getItem("selectedBackground");
  if (savedBg) {
    videoSource.src = `gallery/${savedBg}`;
    videoBg.load();
  }
});
