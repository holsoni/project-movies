import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FilmsDoComponent } from './films-do/films-do.component';
import { FilmsInfoComponent } from './films-info/films-info.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    FilmsDoComponent,
    FilmsInfoComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
