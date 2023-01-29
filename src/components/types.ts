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
  sprites: string;
}

export class Pokemon implements PokeDetails {
  id;
  name;
  sprites;

  constructor(id: number, name: string, sprites: string) {
    this.id = id;
    this.name = name;
    this.sprites = sprites;
  }
}
