// Let's create the variables and listener
let paper = document.getElementById("btnPaper");
let rock = document.getElementById("btnRock");
let scissor = document.getElementById("btnScissor");

let playerMove = document.getElementById("playerIMGjs");
let cpuMove = document.getElementById("cpuIMGjs");

let resultText = document.getElementById("resultText");
let boxText = document.getElementById("textBox");

paper.addEventListener("click", () =>
  addPlayerMove("/assets/sasso_carta_forbice/paper.png")
);
rock.addEventListener("click", () =>
  addPlayerMove("/assets/sasso_carta_forbice/rock.png")
);
scissor.addEventListener("click", () =>
  addPlayerMove("/assets/sasso_carta_forbice/scissor.png")
);

let lock = true;

// Let's create the function that allows the choice of the player's move and the random generation of the CPU move
function addPlayerMove(moveImageSrc) {
  if (lock == false) return;
  lock = false;
  boxText.style.border = "0 solid rgba(255,255,255,1)";
  resultText.innerHTML = "";
  cpuMove.src = "/assets/sasso_carta_forbice/neutral.png";
  playerMove.src = "/assets/sasso_carta_forbice/neutral.png";
  playerMove.classList.add("animation");
  cpuMove.classList.add("animation");

  setTimeout(() => {
    playerMove.classList.remove("animation", "opacity0");
    playerMove.classList.add("opacity100");
    cpuMove.classList.remove("animation", "opacity0");
    cpuMove.classList.add("opacity100");
    playerMove.src = moveImageSrc;
    cpuMove.src = randomCpuImg();
    result();
    lock = true;
  }, 900);
}

let cpuArray = [
  "/assets/sasso_carta_forbice/scissor.png",
  "/assets/sasso_carta_forbice/rock.png",
  "/assets/sasso_carta_forbice/paper.png",
];

// Let's create the CPU random selection function
function randomCpuImg() {
  let randCpu = Math.floor(Math.random() * cpuArray.length);
  return cpuArray[randCpu];
}

// Let's create the player's win
function playerWin() {
  let playerChoice = playerMove.src;
  let cpuChoice = cpuMove.src;
  if (
    (playerChoice.includes("paper") && cpuChoice.includes("rock")) ||
    (playerChoice.includes("rock") && cpuChoice.includes("scissor")) ||
    (playerChoice.includes("scissor") && cpuChoice.includes("paper"))
  ) {
    return true;
  } else {
    return false;
  }
}

// Let's create the cases
function result() {
  if (playerMove.src === cpuMove.src) {
    // console.log("draw");
    resultText.innerHTML = "Draw";
    resultText.style.color = "#FFFFFF";
    boxText.style.border = "2px solid rgba(255,255,255)";
  } else if (playerWin()) {
    // console.log("you won");
    resultText.innerHTML = "You Won!";
    resultText.style.color = "#00FF00";
    boxText.style.border = "2px solid rgba(0,255,0)";
  } else {
    // console.log('you lost');
    resultText.innerHTML = "You Lost :(";
    resultText.style.color = "#FF0000";
    boxText.style.border = "2px solid rgba(255,0,0)";
  }
}
