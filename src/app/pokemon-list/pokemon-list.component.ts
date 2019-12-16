import { Component, OnInit } from '@angular/core';
import { PokemonGeneralInfo } from '../pokemon-card/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, merge } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { PokemonList } from './pokemon-list.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<PokemonList>;
  currentPage$: Observable<number>;

  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentPage$ = this.route.params.pipe(map(params => +params.page));

    this.pokemons$ = this.route.params.pipe(
      switchMap(params => {
        return this.httpClient.get(this.API_URL + '?offset=' + params.page * 20 + '&limit=20');
      }),
      map<{ results: PokemonGeneralInfo[]; count: number }, PokemonList>(response => {
        return {
          count: response.count,
          pokemons: response.results
        };
      })
    );
  }

  goToPage(page) {
    this.router.navigate(['/pokemons', page.pageIndex]);
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
