import { PokemonCard } from "../pokemon-card/pokemon-card.model";

export interface FetchedPokemonList {
  results: PokemonCard[];
  count: number;
}
