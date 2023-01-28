export default interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}

export interface InfoPokemons {
  name: string;
  url: string;
}

export interface InfoPokedex {
  countPokemons: number;
  next: string | undefined;
  previus: string | undefined;
  results: InfoPokemons[];
}
