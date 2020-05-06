import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-search-form",
  templateUrl: "./pokemon-search-form.component.html",
  styleUrls: ["./pokemon-search-form.component.css"]
})
export class PokemonSearchFormComponent implements OnInit {
  searchInput: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.searchInput) {
      this.router.navigate([
        "pokemons",
        "details",
        this.searchInput.toLowerCase()
      ]);
    }
  }
}
