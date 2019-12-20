import { Component, OnInit, Input } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { PokemonCard } from "./pokemon-card.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"]
})
export class PokemonCardComponent implements OnInit {
  @Input()
  cardData: PokemonCard;

  pokemon: Pokemon;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any>(this.cardData.url).subscribe(response => {
      this.pokemon = {
        name: response.name,
        type: response.types[0].type.name,
        imageUrl: response.sprites.front_default
      };
    });
  }
}
