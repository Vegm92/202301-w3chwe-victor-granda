import type { InfoPokedex } from "../components/types.js";
const urlPokeApi = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemonClassics = async (pokemonID: number) => {
  const response = await fetch(`${urlPokeApi}${pokemonID}`);
  const pokemon = (await response.json()) as InfoPokedex;
  return pokemon;
};

export default fetchPokemonClassics;
