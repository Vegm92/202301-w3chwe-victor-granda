import PokemonCardComponent from "./components/CardComponent/PokemonCardComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
import { pokemonDetails } from "./utils/fetchPokemon.js";
import { mainRender } from "./utils/renderPokemon.js";

const root: HTMLElement = document.querySelector(".root");
const mainContainer = new PageComponent(root);
const headerContainer = new HeaderComponent(mainContainer.parentElement);
headerContainer.render();

const looperAwait = [1];
const pokemonsToShow = 50;
for (let i = 2; i < pokemonsToShow; i++) {
  looperAwait.push(i);
}

(async () => {
  for await (const index of looperAwait) {
    const listPokemons = await pokemonDetails(index);
    const newPokemon = new PokemonCardComponent(
      mainContainer.element,
      listPokemons
    );
    newPokemon.render();
  }
})();

mainRender();
