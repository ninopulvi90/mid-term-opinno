let games = [
  {
    name: "Morra cinese",
    img: {
      url: "",
      alt: "Image of Rock-Paper-Scissors",
    },
    url: "sasso_carta_forbice/index.html",
  },
  {
    name: "Memory",
    img: {
      url: "",
      alt: "Image of Memory",
    },
    url: "memory/memory.html",
  },
  {
    name: "Forza 4",
    img: {
      url: "",
      alt: "Image of 4-in-a-row",
    },
    url: "forza_quattro/indexQ.html",
  },
  {
    name: "Snake",
    img: {
      url: "",
      alt: "Image of Snake",
    },
    url: "snake/snake_index.html",
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
  //   let domString = `
  //       <div
  //         id="card-${idNumber}"
  //         class="card"
  //         onclick="goToDestination(${destination})"
  //       >
  //           <div class="card-content">
  //               <div class="img-container">
  //                   <img
  //                   src="${imgUrl}"
  //                   alt="${alt}"
  //                   />
  //               </div>
  //               <div class="text-container">
  //                   <p>${name}</p>
  //               </div>
  //           </div>
  //       </div>
  //     `;

  let card = document.createElement("div");
//   try {
//     card.outerHTML = domString;
//   } catch (e) {
//     alert(e);
//   } finally {
//     return card;
//   }
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
