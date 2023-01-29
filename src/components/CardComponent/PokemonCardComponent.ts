import Component from "../Component/Component.js";
import type { InfoPokedex, InfoPokemons, PokeDetails } from "../types.js";

class PokemonCardComponent extends Component {
  public pokemon: PokeDetails;

  constructor(
    parentElement: Element,
    pokemon: PokeDetails,
    className = "pokemon-card"
  ) {
    super(parentElement, "hola");
    this.pokemon = pokemon;
    this.render();
  }

  public render() {
    super.render();
  }
}

export default PokemonCardComponent;
