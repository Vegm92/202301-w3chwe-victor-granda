export interface InfoPokemons {
  id: string;
  name: string;
  url: string;
}
export interface InfoPokedex {
  countPokemons: number;
  next: string | undefined;
  previus: string | undefined;
  results: InfoPokemons[];
}

export interface PokeDetails {
  id: number;
  name: string;
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
