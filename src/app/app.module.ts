import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, PokemonListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
