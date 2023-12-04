let gameWindow = document.getElementById("game-window");
let width = 18;
let snake = [0, 1, 2];
let movement = 1;
// console.log (gameGrid[0].length);

function printGameGrid() {
  gameWindow.innerHTML = "";
  let j = 0;
  for (let i = 0; i < width * width; i++) {
    const gameGridCell = document.createElement("div");
    gameGridCell.classList.add("grid-item", "flex");
    gameWindow.appendChild(gameGridCell);
  }
}

printGameGrid();

let gridArray = document.getElementsByClassName("grid-item");

let startBtn = document.getElementById("start-btn");
let gameBtn = document.getElementById("game-btn");
startBtn.addEventListener("click", () => {
  startBtn.classList.add("none");
  gameBtn.classList.remove("none");
  snakeGame();
});

//Bottoni a schermo coi loro event listener
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let downBtn = document.getElementById("down-btn");
let upBtn = document.getElementById("up-btn");
//Event listener dei bottoni che cambiano movimento serpente
leftBtn.addEventListener("click", () => {
  if (movement != 1) movement = -1;
});
rightBtn.addEventListener("click", () => {
  if (movement != -1) movement = 1;
});
upBtn.addEventListener("click", () => {
  if (movement != width) movement = -width;
});
downBtn.addEventListener("click", () => {
  if (movement != -width) movement = width;
});

function printSnake() {
  snake.forEach((index) => {
    gridArray[index].innerHTML = "";
    let snakeBody = document.createElement("div");
    snakeBody.classList.add("snake-body");
    gridArray[index].appendChild(snakeBody);
  });
}

function deleteSnake() {
  snake.forEach((index) => {
    gridArray[index].innerHTML = "";
  });
}
printSnake();
spawnFruit();

//Funzione che genera una posizione casuale in cui far comparire il frutto
//la function ritornerà le coordinate del frutto
function spawnFruit() {
  let fruitSpawnSpace;
  //variabile che controllerà se effettivamente qualcosa è nella posizione
  //in cui mi appare il frutto
  let freeSpace = true;
  do {
    freeSpace = true;
    fruitSpawnSpace = Math.floor(Math.random() * width * width);
    snake.forEach((index) => {
      if (fruitSpawnSpace === index) freeSpace = false;
    });
  } while (!freeSpace);

  let fruitImg = document.createElement("img");
  fruitImg.src = "../snake/assets/apple-3155.png";
  gridArray[fruitSpawnSpace].appendChild(fruitImg);
  return fruitSpawnSpace;
}

function snakeGame() {
  setInterval(snakeMove, 500);
}

//function che 'muove' il serpente
function snakeMove() {
  deleteSnake();
  let head = snake[snake.length - 1];
  if (canMove(head, movement, width)) {
    snake.push(head + movement);
    snake.shift();
  } else {
    alert("hai perso");
  }
  console.log(snake);
  printSnake();
}

//function che controlla che effettivamente il serpente possa effettuare quel movimento
function canMove(head, movement, width) {
  let noBonk = true;
  let movedHead = head + movement;
  if (
    movedHead >= width * width ||
    movedHead < 0 ||
    snake.indexOf(movedHead) != -1 ||
    (head % width == width - 1 && movedHead % width == 0) ||
    (head % width == 0 && movedHead % width == width - 1)
  ) {
    noBonk = false;
  }
  return noBonk;
  //aggiungere controllo su barre laterali e su corpo serpente
}
