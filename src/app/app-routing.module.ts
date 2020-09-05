import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog/catalog.component'
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'favorite', component: FavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
