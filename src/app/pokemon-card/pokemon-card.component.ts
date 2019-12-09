import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, PokemonType } from './pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor() {}

  ngOnInit() {}

  getCssClass(pokemonType: PokemonType) {
    switch (pokemonType) {
      case PokemonType.GRASS:
        return 'grass';
      case PokemonType.FIRE:
        return 'fire';
      case PokemonType.ELECTRIC:
        return 'electric';
    }
  }
}
