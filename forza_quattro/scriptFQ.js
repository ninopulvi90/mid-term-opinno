document.addEventListener("DOMContentLoaded", function () {
  // Costanti
  const PLAYER_1_COLOR = "rgb(219, 21, 21)";
  const PLAYER_2_COLOR = "rgb(236, 236, 53)";
  const EMPTY_COLOR = "rgb(10, 10, 138)";
  const GRID_WIDTH = 7;
  const GRID_HEIGHT = 6;

  // Stato del gioco
  let currentPlayer = 1; // Player 1 starts
  let grid = Array.from({ length: GRID_HEIGHT }, () =>
    Array(GRID_WIDTH).fill(0)
  ); // 6 rows, 7 columns
  let scores = {
    player1: 0,
    player2: 0,
  };

  // Ottieni cerchi nella griglia
  const circles = document.querySelectorAll(".circle");
  const score1Dom = document.getElementById("score1");
  const score2Dom = document.getElementById("score2");

  // Aggiungi ascoltatori di eventi clic alle cerchie
  circles.forEach((circle, index) => {
    // circle.innerHTML = `i: ${Math.floor(index / GRID_WIDTH)} j: ${index % GRID_WIDTH}`;
    circle.addEventListener("click", function () {
      // Ottieni la riga e la colonna del cerchio cliccato
      // const row = Math.floor(index / GRID_WIDTH);
      const col = index % GRID_WIDTH;
      const row = getTopTokenFreeSlot(grid, col);
    //   console.log(
    //     `i: ${Math.floor(
    //       index / GRID_WIDTH
    //     )} j: ${col} real coords: i: ${row} j: ${col}`
    //   );

      // Controlla se la posizione cliccata è valida (non riempita)
      if (row !== -1) {
        // Aggiorna la griglia e l'interfaccia utente
        grid[row][col] = currentPlayer;
        updateUI(row, col);

        // Cerca un vincitore
        if (checkForWinner(currentPlayer, grid, row, col)) {
          setTimeout(() => {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
          }, 100);
          console.log("PLAYER WON!");
          if(currentPlayer === 1) {
            scores.player1++;
            score1Dom.innerHTML = scores.player1;
          }
          else {
            scores.player2++;
            score2Dom.innerHTML = scores.player2;
          }
        } else {
          // Passa al giocatore successivo
          currentPlayer = currentPlayer === 1 ? 2 : 1;
        }
      } else {
        alert("Invalid move. Please choose an empty circle.");
      }
    });
  });

  // Con questa prendo il primo slot
  // libero della colonna
  // se non ce ne sono restituisce -1
  function getTopTokenFreeSlot(grid, column) {
    for (let i = GRID_HEIGHT - 1; i >= 0; --i) {
      if (grid[i][column] === 0) {
        return i;
      }
    }
    return -1;
  }

  // Funzione per aggiornare l'interfaccia utente dopo uno spostamento
  function updateUI(row, col) {
    console.log("Updating ui...");
    const index = row * GRID_WIDTH + col;
    circles[index].style.backgroundColor =
      currentPlayer === 1 ? PLAYER_1_COLOR : PLAYER_2_COLOR;
    console.log("...DONE!");
  }

  // Funzione per verificare la presenza di un vincitore
  function checkForWinner(player, grid, row, col) {
    // Implementa la tua logica per verificare la presenza di un vincitore qui
    // Ciò può includere il controllo delle connessioni orizzontali, verticali e diagonali
    // Restituisce vero se c'è un vincitore, altrimenti restituisce falso

    // Horizontal Check
    let counter = 0;
    for (let i = 0; i < GRID_WIDTH; ++i) {
      if (grid[row][i] === player) {
        counter++;
        if (counter >= 4) {
          return true;
        }
      } else counter = 0;
    }

    // Vertical Check
    counter = 0;
    for (let i = 0; i < GRID_HEIGHT; ++i) {
      if (grid[i][col] === player) {
        counter++;
        if (counter >= 4) {
          return true;
        }
      } else counter = 0;
    }

    // Descending Diagonal Check
    counter = 0;
    let coordinates = findFirst(row, col, true);
    while (coordinates.row < GRID_HEIGHT && coordinates.col < GRID_WIDTH) {
      if (grid[coordinates.row][coordinates.col] === player) {
        counter++;
        if (counter >= 4) {
          return true;
        }
      } else counter = 0;
      coordinates.row++;
      coordinates.col++;
    }

    // Ascending Diagonal Check
    counter = 0;
    // todo
    coordinates = findFirst(row, col, false);
    while (coordinates.row > 0 && coordinates.col < GRID_WIDTH) {
      if (grid[coordinates.row][coordinates.col] === player) {
        counter++;
        if (counter >= 4) {
          return true;
        }
      } else counter = 0;
      coordinates.row--;
      coordinates.col++;
    }
    return false;

    function findFirst(row, col, descending) {
      let i = row;
      let j = col;
      while (j > 0 && i > 0 && i < GRID_HEIGHT - 1) {
        i += descending ? -1 : 1;
        j--;
      }
      console.log(`first diagonal at i: ${i} j: ${j}`);
      return { row: i, col: j };
    }
  }

  // Funzione per resettare il gioco
  function resetGame() {
    // Cancella la griglia e reimposta l'interfaccia utente
    grid = Array.from({ length: 6 }, () => Array(7).fill(0));
    circles.forEach((circle) => {
      circle.style.backgroundColor = EMPTY_COLOR;
    });
    currentPlayer = 1; // Player 1 starts again
  }
});
