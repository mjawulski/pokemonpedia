import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  searchInput: string;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.searchInput) {
      this.router.navigate([
        "pokemons",
        "search",
        this.searchInput.toLowerCase()
      ]);
    }
  }
}
