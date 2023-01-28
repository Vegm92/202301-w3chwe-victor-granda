export default interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface InfoPokemons {
  name: string;
  url: string;
}

export interface InfoPokedex {
  numberPokemons: number;
  results: InfoPokemons[];
  next(): void;
  previus(): void;
}
