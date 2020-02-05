import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { FetchedPokemonList } from "./fetched-pokemon-list.model";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<FetchedPokemonList>;
  currentPage$: Observable<number>;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentPage$ = this.route.params.pipe(map(params => params.page));

    this.pokemons$ = this.route.params.pipe(
      switchMap(params => {
        return this.pokemonsService.fetchPokemonList(params.page);
      })
    );
  }

  goToPage(page) {
    this.router.navigate(["/pokemons", page.pageIndex]);
  }

  fetchNew(page) {
    this.pokemons$ = this.pokemonsService.fetchPokemonList(page);
  }
}
