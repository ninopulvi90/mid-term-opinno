let gameWindow = document.getElementById("game-window");
let width = 18;
let gameGrid = Array(width).fill(Array(width));
// console.log (gameGrid[0].length);

function printGameGrid() {
  gameWindow.innerHTML = "";
  //Vado a iterare sulla matrice e a dargli in maniera preliminare la classe grid item
  //todo:
  //1. aggiungere un confronto sull'elemento su cui itero per dargli una classe specifica
  // in base al suo essere la testa del serpente, parte del corpo, frutto o spazio vuoto

  for (let i = 0; i < width * width; i++) {
    const gameGridCell = document.createElement("div");
    gameGridCell.classList.add("grid-item");
    gameWindow.appendChild(gameGridCell);
  }
}

printGameGrid();

let startBtn = document.getElementById("start-btn");
let gameBtn = document.getElementById("game-btn");
startBtn.addEventListener("click", () => {
  startBtn.classList.add("none");
  gameBtn.classList.remove("none");
});
