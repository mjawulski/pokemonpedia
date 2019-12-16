import { PokemonDetailsUrl } from '../pokemon-card/pokemon.model';

export interface FetchedPokemonList {
  results: PokemonDetailsUrl[];
  count: number;
}
