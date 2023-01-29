import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
import fetchDataPokemon, {
  allPokemonClassicsList,
  getRandomPokemon,
  pokemonDetails,
} from "./utils/fetchPokemon.js";
const maxPokemons = 150;

const mainContainer = new PageComponent(document.querySelector(".root"));
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();

(async () => {
  const randomPoke = getRandomPokemon(maxPokemons);
  const listClassicPokemons = await allPokemonClassicsList(20)!;
  const singlePokemon = await pokemonDetails(randomPoke)!;
})();

const getPokemonById = await pokemonDetails(55);
