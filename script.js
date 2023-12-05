let games = [
  {
    name: "Morra cinese",
    img: {
      url: "https://www.minibasket.info/wp/wp-content/uploads/2020/01/MorraCinese.png",
      alt: "Image of Rock-Paper-Scissors",
    },
    url: "sasso_carta_forbice/index.html",
  },
  {
    name: "Memory",
    img: {
      url: "https://www.york.ac.uk/media/news-and-events/pressreleases/2021/memory-505.jpg",
      alt: "Image of Memory",
    },
    url: "memory/memory.html",
  },
  {
    name: "Forza 4",
    img: {
      url: "https://a.silvergames.com/j/b/connect-4.jpg",
      alt: "Image of 4-in-a-row",
    },
    url: "forza_quattro/indexQ.html",
  },
  {
    name: "Snake",
    img: {
      url: "https://cdntattoofilter.com/tattoo/210457/l.jpg",
      alt: "Image of Snake",
    },
    url: "snake/snake_index.html",
  },
  {
    name: "Tetris",
    img: {
      url: "https://m.media-amazon.com/images/I/61M3rDwh4qL.png",
      alt: "Image of Tetris",
    },
    url: "",
  },
  {
    name: "Pacman",
    img: {
      url: "https://static.giochi123.net/game-images/pacman_big_v3.webp",
      alt: "Image of Pacman",
    },
    url: "",
  },
  {
    name: "Donkey Kong",
    img: {
      url: "https://multiplayer.net-cdn.it/thumbs/images/2021/10/16/donkey-kong-copertina_jpg_1200x0_crop_q85.jpg",
      alt: "Image of Donkey Kong",
    },
    url: "",
  },
];

function createCard(idNumber, name, imgUrl, alt, destination) {
  let domString = `
        <div class="card-content">
            <div class="img-container">
                <img
                src="${imgUrl}"
                alt="${alt}"
                />
            </div>
            <div class="text-container">
                <p>${name}</p>
            </div>
        </div>
    `;
  let card = document.createElement("div");

  console.log(card);
  card.innerHTML = domString;
  card.id = `card-${idNumber}`;
  card.classList.add("card");
  card.onclick = () => goToDestination(destination);
  return card;
}

window.goToDestination = function (destination) {
  this.location.href = destination;
};

let mainContainer = document.getElementById("main-container");
games.forEach((game, id) => {
  let card = createCard(id, game.name, game.img.url, game.img.alt, game.url);
  mainContainer.appendChild(card);
});
