window.addEventListener("load", () => {
  document.querySelector(".hero").style.opacity = 1;
});
function downloadFolder(){
  const file = "download-folder.zip";
  const a = document.createElement("a");
  a.href = file;
  a.download = "resources.zip";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}