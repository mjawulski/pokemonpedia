import { Component, OnInit } from "@angular/core";
import { PokemonCard } from "../pokemon-card/pokemon-card.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonCard[];
  pokemonsCount: number;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<any>("https://pokeapi.co/api/v2/pokemon")
      .subscribe(response => {
        this.pokemons = response.results;
        this.pokemonsCount = response.count;
      });
  }

  goToPage(page) {
    this.httpClient
      .get<any>(
        "https://pokeapi.co/api/v2/pokemon?offset=" +
          page.pageIndex * 20 +
          "&limit=20"
      )
      .subscribe(response => {
        this.pokemons = response.results;
      });
  }
}
