import { PokemonGeneralInfo } from '../pokemon-card/pokemon.model';

export interface PokemonList {
  pokemons: PokemonGeneralInfo[];
  count: number;
}
