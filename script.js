document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded and DOM fully built.");
  
    const images = document.querySelectorAll(".gallery img");
  
    images.forEach((img, index) => {
      // Add tabindex if not already in HTML
      img.setAttribute("tabindex", index);
  
      // Mouse events
      img.addEventListener("mouseover", () => upDate(img));
      img.addEventListener("mouseleave", undo);
  
      // Focus and blur events for keyboard accessibility
      img.addEventListener("focus", () => upDate(img));
      img.addEventListener("blur", undo);
    });
  });
  
  function upDate(previewPic) {
    const image = document.getElementById("image");
    image.style.backgroundImage = `url(${previewPic.src})`;
    image.textContent = previewPic.alt;
  }
  
  function undo() {
    const image = document.getElementById("image");
    image.style.backgroundImage = "none";
    image.textContent = "Hover over an image below to display here.";
  }