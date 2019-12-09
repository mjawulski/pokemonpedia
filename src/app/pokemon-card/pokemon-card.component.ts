import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PokemonGeneralInfo, PokemonType, PokemonCard } from './pokemon.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, OnChanges {
  @Input()
  pokemon: PokemonGeneralInfo;

  pokemonCard$: Observable<PokemonCard>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // console.log(this.pokemon);
    this.pokemonCard$ = this.httpClient.get<any>(this.pokemon.url).pipe(
      map<any, PokemonCard>(response => {
        return {
          name: response.name,
          avatarUrl: response.sprites.front_default
        };
      })
    );
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {}

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
