import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container.js"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

createCharacterCard("Arnold");

async function fetchCharacters() {
  const endPoint = await fetch("https://rickandmortyapi.com/api/character");
  const dataPoint = await endPoint.json();

  const dataList = dataPoint.results;
  //cardContainer.innerHTML = '';

  console.log(dataPoint);
  console.log(dataList);
  dataList.forEach((character) => {
    const card = createCharacterCard(character);
  });
  createCharacterCard();
}

fetchCharacters();
