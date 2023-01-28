import Component from "../Component/Component.js";
class PageComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex-container", "section");
  }
}

export default PageComponent;
