import { Component, OnInit } from '@angular/core';
import { PokemonGeneralInfo, PokemonType } from '../pokemon-card/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, merge } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { PokemonList } from './pokemon-list.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<PokemonList>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.pokemons$ = this.httpClient.get('https://pokeapi.co/api/v2/pokemon').pipe(
      map<{ results: PokemonGeneralInfo[]; count: number }, PokemonList>(response => {
        return {
          count: response.count,
          pokemons: response.results
        };
      })
    );
  }

  fetchNew(page) {
    this.pokemons$ = this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?offset=' + page.pageIndex * 20 + '&limit=20')
      .pipe(
        map<{ results: PokemonGeneralInfo[]; count: number }, PokemonList>(response => {
          return {
            count: response.count,
            pokemons: response.results
          };
        })
      );
  }
}
