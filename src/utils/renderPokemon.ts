import type { InfoPokemons } from "../components/types.js";
import { fetchPokemonClassics } from "./fetchPokemon.js";

const pokemonsList = fetchPokemonClassics();
const renderPokemons = (pokemonsList: InfoPokemons) => {};
