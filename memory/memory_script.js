const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg'];

const gameBoard = document.getElementById('game-board');
let selectedCards = [];
let matchedPairs = 0;

// Duplicate and shuffle the images
const cards = [...images, ...images].sort(() => Math.random() - 0.5);

// Create the game board
cards.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;
    card.addEventListener('click', flipCard);

    // Create an img element for each card
    const img = document.createElement('img');
    img.src = image;

    // Append the img element to the card
    card.appendChild(img);

    gameBoard.appendChild(card);
});

function flipCard() {
    const selectedCard = this;

    // Check if the card is already flipped or if two cards are already selected
    if (selectedCard.classList.contains('flipped') || selectedCards.length === 2) {
        return;
    }

    selectedCard.classList.add('flipped');

    // Show the hidden image when the card is flipped
    selectedCard.querySelector('img').style.display = 'block';

    selectedCards.push({ index: selectedCard.dataset.index, image: cards[selectedCard.dataset.index] });

    if (selectedCards.length === 2) {

        setTimeout(checkMatch, 1500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.image === card2.image && card1.index !== card2.index) {
        disableCards(card1.index, card2.index);
        matchedPairs++;

        if (matchedPairs === images.length) {
            alert('Congratulations! You won!');
            resetGame();
        }
    } else {
        flipBackCards(card1.index, card2.index);
    }

    selectedCards = [];
}

function disableCards(index1, index2) {
    document.querySelector(`[data-index="${index1}"]`).removeEventListener('click', flipCard);
    document.querySelector(`[data-index="${index2}"]`).removeEventListener('click', flipCard);
}

function flipBackCards(index1, index2) {
    const card1 = document.querySelector(`[data-index="${index1}"]`);
    const card2 = document.querySelector(`[data-index="${index2}"]`);

    // Remove the 'flipped' class
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');

    // Hide the images by setting display to 'none'
    card1.querySelector('img').style.display = 'none';
    card2.querySelector('img').style.display = 'none';
}

function resetGame() {
    gameBoard.innerHTML = '';
    selectedCards = [];
    matchedPairs = 0;

    cards.sort(() => Math.random() - 0.5);

    cards.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.addEventListener('click', flipCard);

        // Create an img element for each card
        const img = document.createElement('img');
        img.src = image;

        // Append the img element to the card
        card.appendChild(img);

        gameBoard.appendChild(card);
    });
}
