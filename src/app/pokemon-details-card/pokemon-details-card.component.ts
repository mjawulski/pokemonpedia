import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../pokemon-card/pokemon.model";

@Component({
  selector: "app-pokemon-details-card",
  templateUrl: "./pokemon-details-card.component.html",
  styleUrls: ["./pokemon-details-card.component.css"]
})
export class PokemonDetailsCardComponent implements OnInit {
  pokemonExists: boolean;
  pokemon: Pokemon;

  inputPokemonName: string;

  defaultImageSrc = "../../assets/pokeball.png";

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
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
              imageUrl: pokemonData.sprites.front_default,
              stats: pokemonData.stats.map(stat => {
                return {
                  name: stat.stat.name,
                  value: stat.base_stat
                };
              })
            };
          },
          error => {
            this.pokemonExists = false;
            this.inputPokemonName = params.pokemonName;
          }
        );
    });
  }
}
