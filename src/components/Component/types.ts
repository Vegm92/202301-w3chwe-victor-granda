export default interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}
