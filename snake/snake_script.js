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

function printSnake() {
  snake.forEach((index) => {
    let snakeBody = document.createElement("div");
    snakeBody.classList.add("snake-body");
    gridArray[index].appendChild(snakeBody);
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
  fruitImg.src = "assets/apple-3155.png";
  gridArray[fruitSpawnSpace].appendChild(fruitImg);
  return fruitSpawnSpace;
}
