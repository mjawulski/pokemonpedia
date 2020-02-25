import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PokemonSearchComponent } from "./pokemon-search/pokemon-search.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
