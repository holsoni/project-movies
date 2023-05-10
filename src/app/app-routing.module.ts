import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {FavouriteComponent} from "./favourite/favourite.component";
import {FilmsInfoComponent} from "./films-info/films-info.component";
import {SearchResComponent} from "./search-res/search-res.component";
import {LoginComponent} from "./login/login.component";
import {FilmsViewComponent} from "./films-view/films-view.component";
import {AddComponent} from "./films-info/add/add.component";
import {EditComponent} from "./films-info/edit/edit.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {EditUserComponent} from "./user-info/edit-user/edit-user.component";
import {AuthGuard} from "../service/auth.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: HomeComponent },
  { path: 'favorite', component: FavouriteComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['User','Admin','Manager']
    }},
  {path:'search/:name',component:SearchResComponent},
  { path: 'search', component: SearchResComponent },
  {path:'login', component:LoginComponent},
  {path:'filmManagement', component:FilmsInfoComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['Admin','Manager']
    }},
  {path:'filmManagement/add', component:AddComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['Admin','Manager']
    }},
  {path:'filmManagement/edit/:id', component:EditComponent,
    canActivate: [AuthGuard],
    data: {
      role: ['Admin','Manager']
    }},
  {path:'userManagement', component:UserInfoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'Admin'
    }},
  {path:'userManagement/edit/:id', component:EditUserComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'Admin'
    }},
  {path:'401',component:NotAuthorizedComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
