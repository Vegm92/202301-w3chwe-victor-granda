import type { InfoPokemons, PokeDetails } from "../components/types.js";
import pokemonDetails from "./fetchPokemon.js";

export const renderPokemons = (pokeData: PokeDetails) => {
  const allPokemonContainer = document.querySelector(".root")!;
  const pokemonContainer: HTMLElement = document.createElement("div");

  const pokeName = document.createElement("h4");
  const pokeNumber = document.createElement("p");
  const pokeImage = document.createElement("img");

  pokeName.innerHTML = `Name: ${pokeData.name}`;
  pokeNumber.innerText = `Nº ${pokeData.id}`;
  pokeImage.setAttribute(
    "src",
    `${pokeData.sprites.other["official-artwork"].front_default}`
  );

  pokemonContainer.append(pokeImage, pokeName, pokeNumber);
  allPokemonContainer.appendChild(pokemonContainer);
};
