import type { InfoPokedex, InfoPokemons } from "../components/types.js";
const completeClassicPokeList = "https://pokeapi.co/api/v2/pokemon?limit=151";
const onePokeApi = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemonClassics = async () => {
  const response = await fetch(completeClassicPokeList);
  const pokemons = (await response.json()) as InfoPokedex;
  pokemons.results.forEach(async (pokemon) => {
    await fetchPokemonData(pokemon);
  });
  return pokemons;
};

export const fetchPokemonData = async (pokemon: InfoPokemons) => {
  const urlPoke = pokemon.url;
  await fetch(urlPoke)
    .then(async (response) => response.json())
    .then((pokeData) => pokeData as InfoPokemons);
};

export const pokemonsList = fetchPokemonClassics();
