import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../pokemon-card/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, merge } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  pokemons$: Observable<Pokemon[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.pokemons = [
      {
        name: 'Pikachu',
        avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        type: PokemonType.ELECTRIC
      },
      {
        name: 'Bulbasaur',
        avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        type: PokemonType.GRASS
      },

      {
        name: 'Charmander',
        avatarUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        type: PokemonType.FIRE
      }
    ];
  }
}
