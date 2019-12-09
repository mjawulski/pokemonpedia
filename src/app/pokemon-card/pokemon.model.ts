export interface Pokemon {
  name: string;
  avatarUrl: string;
  type: PokemonType;
}

export enum PokemonType {
  GRASS = 'trawiasty',
  ELECTRIC = 'elektryczny',
  FIRE = 'ognisty'
}
