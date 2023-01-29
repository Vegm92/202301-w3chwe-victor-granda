import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokedex--header", "header");
    this.render();
  }

  render() {
    super.render();
    this.element.innerHTML = `<img src="img/gotta-catch-em-all-transparent-pokemon-logo-11.png" class="header-img">`;
  }
}

export default HeaderComponent;
