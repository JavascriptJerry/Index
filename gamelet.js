const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

var posX = 0;
var posY = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    posX = posX - 5;
    ball.style.left = `${posX}px`;
  }
  if (e.code === "ArrowRight") {
    posX = posX + 5;
    ball.style.left = `${posX}px`;
  }
  if (e.code === "ArrowUp") {
    posY = posY - 5;
    ball.style.top = `${posY}px`;
  }
  if (e.code === "ArrowDown") {
    posY = posY + 5;
    ball.style.top = `${posY}px`;
  }
  console.log("Position X:" + posX);
  console.log("Position Y:" + posY);
}

// let firstNumber = prompt("Pick a number");
// let secondNumber = prompt("Pick another number");
// let sum = firstNumber + secondNumber;
// alert(sum);
