import Component from "../Component/Component";
import { InfoPokedex } from "../types";

const urlPokeApi = "https://pokeapi.co/api/v2/pokemon";

class PageComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "pageComponent", "section");
  }
}
