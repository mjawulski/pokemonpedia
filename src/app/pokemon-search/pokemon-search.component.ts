import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon-card/pokemon.model";

@Component({
  selector: "app-pokemon-search",
  templateUrl: "./pokemon-search.component.html",
  styleUrls: ["./pokemon-search.component.css"]
})
export class PokemonSearchComponent implements OnInit {
  pokemonExists: boolean;
  pokemon: Pokemon;

  inputPokemonName: string;

  isLoading = false;

  defaultImageSrc = "../../assets/pokeball.png";

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.httpClient
        .get<any>("https://pokeapi.co/api/v2/pokemon/" + params.pokemonName)
        .subscribe(
          pokemonData => {
            this.pokemonExists = true;
            this.pokemon = {
              name: pokemonData.name,
              type: pokemonData.types[0].type.name,
              imageUrl: pokemonData.sprites.front_default
            };
          },
          error => {
            this.pokemonExists = false;
            this.inputPokemonName = params.pokemonName;
          }
        );
    });
  }

  imageLoaded() {
    this.isLoading = false;
  }
}
