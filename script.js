let games = [
  {
    name: "Morra cinese",
    img: {
      url: "",
      alt: "Image of Rock-Paper-Scissors",
    },
    url: "",
  },
  {
    name: "Memory",
    img: {
      url: "",
      alt: "Image of Memory",
    },
    url: "",
  },
  {
    name: "Forza 4",
    img: {
      url: "",
      alt: "Image of 4-in-a-row",
    },
    url: "",
  },
  {
    name: "Snake",
    img: {
      url: "",
      alt: "Image of Snake",
    },
    url: "",
  },
  {
    name: "Tetris",
    img: {
      url: "",
      alt: "Image of Tetris",
    },
    url: "",
  },
  {
    name: "Pacman",
    img: {
      url: "",
      alt: "Image of Pacman",
    },
    url: "",
  },
  {
    name: "Donkey Kong",
    img: {
      url: "",
      alt: "Image of Donkey Kong",
    },
    url: "",
  },
];

function createCard(idNumber, name, imgUrl, alt, destination) {
  let domString = `
      <div
        id="card-${idNumber}" 
        class="card"
        onclick="goToDestination(destination)"
      >
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
      </div>
    `;

}

window.goToDestination = function (destination) {
    this.location.href = destination;
}

