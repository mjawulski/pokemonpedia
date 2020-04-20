import { Component, OnInit } from "@angular/core";
import { PokemonCard } from "../pokemon-card/pokemon-card.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { FetchedPokemonList } from "./fetched-pokemon-list.model";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<FetchedPokemonList>;
  currentPage$: Observable<number>;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentPage$ = this.route.params.pipe(map(params => params.page));

    this.pokemons$ = this.route.params.pipe(
      switchMap(params => {
        return this.httpClient.get<FetchedPokemonList>(
          "https://pokeapi.co/api/v2/pokemon?offset=" +
            params.page * 20 +
            "&limit=" +
            20
        );
      })
    );
  }

  goToPage(page) {
    this.router.navigate(["/pokemons", page.pageIndex]);
  }

  fetchNew(page) {
    this.pokemons$ = this.httpClient.get<FetchedPokemonList>(
      "https://pokeapi.co/api/v2/pokemon?offset=" + page * 20 + "&limit=" + 20
    );
  }
}
