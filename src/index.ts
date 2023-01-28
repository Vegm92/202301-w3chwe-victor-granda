import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";
import fetchPokemonClassics from "./utils/fetchPokemon.js";

const mainContainer = new PageComponent(document.querySelector(".root"));
mainContainer.render();

const headerContainer = new HeaderComponent(mainContainer.element);
headerContainer.render();

(async () => {
  await fetchPokemonClassics(50);
})();
