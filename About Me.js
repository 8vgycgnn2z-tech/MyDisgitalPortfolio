document.querySelectorAll(".social-icons i").forEach(icon => {
  icon.addEventListener("click", () => {
    icon.style.transform = "scale(1.2)";
    setTimeout(() => {
      icon.style.transform = "scale(1)";
    }, 200);
  });
});
