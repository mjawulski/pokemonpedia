import { PokemonStat } from "./pokemon-stat.model";

export interface Pokemon {
  name: string;
  type: string;
  imageUrl: string;
  polishType?: string;
  stats?: PokemonStat[];
}
