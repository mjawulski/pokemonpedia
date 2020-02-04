import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { FetchedPokemonList } from "./pokemon-list/fetched-pokemon-list.model";

@Injectable({
  providedIn: "root"
})
export class PokemonsService {
  private readonly POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
  private readonly MAX_NUMBER_OF_FETCHED_POKEMONS = 20;

  constructor(private httpClient: HttpClient) {}

  fetchPokemonList(pageNumber: number): Observable<FetchedPokemonList> {
    return this.httpClient.get<FetchedPokemonList>(
      this.POKEMON_API_URL +
        "?offset=" +
        pageNumber * this.MAX_NUMBER_OF_FETCHED_POKEMONS +
        "&limit=" +
        this.MAX_NUMBER_OF_FETCHED_POKEMONS
    );
  }

  fetchPokemonDetails(pokemonDetailsUrl: string) {
    return this.httpClient.get<any>(pokemonDetailsUrl);
  }
}
