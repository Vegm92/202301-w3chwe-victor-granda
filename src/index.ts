import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
import { InfoPokemons, Pokemon } from "./components/types.js";
import fetchDataPokemon, {
  fetchPokemonsClassics,
} from "./utils/fetchPokemon.js";

const mainContainer = new PageComponent(document.querySelector(".root"));
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.domElement);
headerContainer.render();

(async () => {
  const listClassicPokemons = await fetchPokemonsClassics(12)!;

  const singlePokemon = await fetchDataPokemon(20)!;
})();

const pokemon1 = new Pokemon(20, "papa", "adad");
