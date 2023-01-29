import type { InfoPokemons, PokeDetails } from "../components/types.js";
import pokemonDetails from "./fetchPokemon.js";

export const mainRender = (): void => {
  const root = document.querySelector(".root");
  const main = document.createElement("main")!;
  main.classList.add("flex");

  root.appendChild(main);
};

export const renderPokemons = (pokeData: PokeDetails) => {
  const articlePokemon: HTMLElement = document.createElement("article");
  const pokemonCard: HTMLElement = document.createElement("div");
  const getMain: HTMLElement = document.querySelector("main");

  const pokeBackGroundPattern = document.createElement("img");
  const pokeImage = document.createElement("img");
  const pokeName = document.createElement("h1");
  const pokeNumber = document.createElement("p");

  articlePokemon.classList.add("card");
  pokemonCard.classList.add("card-body");
  pokeBackGroundPattern.classList.add("card-header");
  pokeImage.classList.add("card-body-img");
  pokeName.classList.add("card-body-title");

  pokeNumber.innerText = `Nº ${pokeData.id}`;
  pokeName.innerHTML = `${pokeData.name}`;

  pokeImage.setAttribute(
    "src",
    `${pokeData.sprites.other["official-artwork"].front_default}`
  );

  pokemonCard.append(pokeImage, pokeName, pokeNumber);
  articlePokemon.append(pokemonCard, pokeBackGroundPattern);
  getMain.appendChild(articlePokemon);
};

export const renderHeader = () => {
  const root = document.querySelector(".root")!;
  const header = document.createElement("header");

  header.classList.add("header");
  header.setAttribute("src", ``);
  header.innerHTML = `<img src="img/gotta-catch-em-all-transparent-pokemon-logo-11.png">`;

  return root.appendChild(header);
};
