import type ComponentStructure from "../Component/types.js";

class Component implements ComponentStructure {
  element: Element;

  constructor(public parentElement: Element, className: string, tag = "div") {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  render() {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
