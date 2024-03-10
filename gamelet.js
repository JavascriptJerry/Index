const ball = document.getElementById("ball");

document.addEventListener("keydown", handleKeyPress);

var posX = 0;
var posY = 0;

const thing = prompt("What do you want your header to say?");
const thing2 = prompt(
  "What color do you want your ball to be? (Can be in HEX, rgb, or text format, like 'red')"
);
ball.style.backgroundColor = thing2;
document.getElementById("username").innerText = thing;

// the key press handling function, E is the variable name of the key
function handleKeyPress(e) {
  // if the key pressed code is equal to ArrowLeft
  if (e.code === "ArrowLeft") {
    posX = posX - 5;
    ball.style.left = `${posX}px`; // combining the number that posX is with the letters PX (for example, if PosX is 10, then it becomes 10+px, which is 10px)
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
  // Logs "Position X: (whatever the position is) ex: Position X: 5 (if posX = 5)"
  console.log("Position X:" + posX);
  console.log("Position Y:" + posY);
}
