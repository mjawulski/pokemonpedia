import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PokemonGeneralInfo, PokemonCard } from './pokemon.model';
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
    this.pokemonCard$ = this.httpClient.get<any>(this.pokemon.url).pipe(
      map<any, PokemonCard>(response => {
        return {
          name: response.name,
          avatarUrl: response.sprites.front_default,
          type: response.types[0].type.name
        };
      })
    );
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {}

  getPolishType(pokemonType: string) {
    switch (pokemonType) {
      case 'normal':
        return 'normalny';
      case 'fire':
        return 'ognisty';
      case 'water':
        return 'wodny';
      case 'electric':
        return 'elektryczny';
      case 'grass':
        return 'trawiasty';
      case 'ice':
        return 'lodowy';
      case 'fighting':
        return 'waleczny';
      case 'poison':
        return 'trujacy';
      case 'ground':
        return 'ziemny';
      case 'flying':
        return 'latajacy';
      case 'psychic':
        return 'psychiczny';
      case 'bug':
        return 'robak';
      case 'rock':
        return 'skalny';
      case 'ghost':
        return 'duch';
      case 'dragon':
        return 'smok';
      case 'dark':
        return 'mroczny';
      case 'steel':
        return 'stalowy';
      case 'fairy':
        return 'bajkowy';
    }
  }
}
