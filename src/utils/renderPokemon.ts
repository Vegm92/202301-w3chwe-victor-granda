import type { InfoPokemons } from "../components/types.js";

const renderPokemons = (pokeData: InfoPokemons) => {
  const allPokemonContainer: Element = document.querySelector(".root")!;
  const pokemonContainer: HTMLElement = document.createElement("div");
  const pokemonName = document.createElement("h4");
  pokemonName.innerHTML = pokeData.name;

  const pokeNumber = document.createElement("p");
  pokeNumber.innerText = pokeData.id;

  pokemonContainer.append(pokemonName, pokeNumber);
  allPokemonContainer.appendChild(pokemonContainer);
};
