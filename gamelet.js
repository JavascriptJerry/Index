const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 1;
  }
  if (e.code === "ArrowRight") {
    position = position + 1;
  }
  if (position < 0) {
    position = 0;
  }
  if (e.code === "ArrowUp") {
    position = position + 1;
  }
  if (e.code === "ArrowDown") {
    position = position - 1;
  }
  if (position < 0) {
    position = 0;
  }
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = position + "xp";
}
