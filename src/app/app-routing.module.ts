import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent, pathMatch: 'full' },
  { path: 'pokemons/0', redirectTo: 'pokemons' },
  { path: 'pokemons/:page', component: PokemonListComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '**', component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
