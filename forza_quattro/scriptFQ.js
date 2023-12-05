document.addEventListener('DOMContentLoaded', function () {
    // Costanti
    const PLAYER_1_COLOR = 'rgb(219, 21, 21)';
    const PLAYER_2_COLOR = 'rgb(236, 236, 53)';
    const EMPTY_COLOR = 'rgb(177, 199, 244)';
    
    // Stato del gioco
    let currentPlayer = 1; // Player 1 starts
    let grid = Array.from({ length: 6 }, () => Array(7).fill(0)); // 6 rows, 7 columns
    
    // Ottieni cerchi nella griglia
    const circles = document.querySelectorAll('.circle');
    
    // Aggiungi ascoltatori di eventi clic alle cerchie
    circles.forEach((circle, index) => {
        circle.addEventListener('click', function () {
            // Ottieni la riga e la colonna del cerchio cliccato
            const row = Math.floor(index / 7);
            const col = index % 7;

            // Controlla se la posizione cliccata è valida (non riempita)
            if (grid[row][col] === 0) {
                // Aggiorna la griglia e l'interfaccia utente
                grid[row][col] = currentPlayer;
                updateUI(row, col);

                // Cerca un vincitore
                if (checkForWinner(row, col)) {
                    alert(`Player ${currentPlayer} wins!`);
                    resetGame();
                } else {
                    // Passa al giocatore successivo
                    currentPlayer = currentPlayer === 1 ? 2 : 1;
                }
            } else {
                alert('Invalid move. Please choose an empty circle.');
            }
        });
    });

    // Funzione per aggiornare l'interfaccia utente dopo uno spostamento
    function updateUI(row, col) {
        const index = row * 7 + col;
        circles[index].style.backgroundColor = currentPlayer === 1 ? PLAYER_1_COLOR : PLAYER_2_COLOR;
    }

    // Funzione per verificare la presenza di un vincitore
    function checkForWinner(row, col) {
        // Implementa la tua logica per verificare la presenza di un vincitore qui
         // Ciò può includere il controllo delle connessioni orizzontali, verticali e diagonali
        // Restituisce vero se c'è un vincitore, altrimenti restituisce falso
        return false;
    }

    // Funzione per resettare il gioco
    function resetGame() {
        // Cancella la griglia e reimposta l'interfaccia utente
        grid = Array.from({ length: 6 }, () => Array(7).fill(0));
        circles.forEach(circle => {
            circle.style.backgroundColor = EMPTY_COLOR;
        });
        currentPlayer = 1; // Player 1 starts again
    }
});

