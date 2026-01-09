document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar span");

  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
});
