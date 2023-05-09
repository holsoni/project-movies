import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {FavouriteComponent} from "./favourite/favourite.component";


const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: HomeComponent },
  { path: 'favorite', component: FavouriteComponent },
  { path: 'search', component: SearchComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
