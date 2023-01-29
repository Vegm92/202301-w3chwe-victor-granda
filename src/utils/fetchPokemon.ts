import type { InfoPokedex, InfoPokemons } from "../components/types.js";
const originalPokemons = "https://pokeapi.co/api/v2/pokemon?limit=";
const pokeApiGeneral = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemonsClassics = async (pokeLimit: number) => {
  const response = await fetch(`${originalPokemons}${pokeLimit}`);
  const pokeData = (await response.json()) as InfoPokedex;
  pokeData.results.forEach(async (pokemon) => {
    const urlPoke = pokemon.url;
    const pokemonDetails = await fetch(urlPoke);
    const pokemons = (await pokemonDetails.json()) as InfoPokemons;
    return pokemons;
  });
  return pokeData;
};

export const fetchDetailsPokemon = async (idPoke: number) => {
  try {
    const response = await fetch(`${pokeApiGeneral}${idPoke}`);
    const data = (await response.json()) as InfoPokedex;
    return data;
  } catch (error: unknown) {}
};

export default fetchDetailsPokemon;
