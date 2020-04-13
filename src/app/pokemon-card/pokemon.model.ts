import { PokemonStat } from "./pokemon-stat.model";

export interface Pokemon {
  name: string;
  type: string;
  polishType?: string;
  imageUrl: string;
  stats?: PokemonStat[];
}
