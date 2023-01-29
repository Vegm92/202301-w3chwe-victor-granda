import type {
  InfoPokedex,
  InfoPokemons,
  PokeDetails,
} from "../components/types.js";
import { renderPokemons } from "./renderPokemon.js";
const originalPokemons = "https://pokeapi.co/api/v2/pokemon?limit=";
const pokeApiGeneral = "https://pokeapi.co/api/v2/pokemon/";

export const allPokemonClassicsList = async (pokeLimit: number) => {
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

export function getRandomPokemon(maxPokemons: number) {
  return Math.floor(Math.random() * maxPokemons);
}

export const pokemonDetails = async (idPoke: number) => {
  try {
    const response = await fetch(`${pokeApiGeneral}${idPoke}`);
    const data = (await response.json()) as PokeDetails;
    renderPokemons(data);
    return data;
  } catch (error: unknown) {}
};

export default pokemonDetails;
