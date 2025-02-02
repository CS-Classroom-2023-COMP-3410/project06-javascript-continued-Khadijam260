const appContainer = document.getElementById("app-container");
const dragHandle = document.querySelector(".drag-handle");

let offsetX = 0, offsetY = 0, isDragging = false;

// Ensure container starts in the center of the screen
document.addEventListener("DOMContentLoaded", () => {
  appContainer.style.position = "fixed";
  appContainer.style.top = "50%";
  appContainer.style.left = "50%";
  appContainer.style.transform = "translate(-50%, -50%)";
});

// When dragging starts
dragHandle.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - appContainer.getBoundingClientRect().left;
  offsetY = e.clientY - appContainer.getBoundingClientRect().top;
  appContainer.style.cursor = "grabbing";
});

// When moving the mouse
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;
    
    // Ensure it moves freely across the screen
    appContainer.style.left = `${newX}px`;
    appContainer.style.top = `${newY}px`;
    appContainer.style.transform = "none";  // Remove transform after dragging starts
  }
});

// When releasing the mouse
document.addEventListener("mouseup", () => {
  isDragging = false;
  appContainer.style.cursor = "grab";
});
