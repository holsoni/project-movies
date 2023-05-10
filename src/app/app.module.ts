import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FilmsInfoComponent } from './films-info/films-info.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";
import { SearchResComponent } from './search-res/search-res.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FilmsViewComponent } from './films-view/films-view.component';
import {MatInputModule} from "@angular/material/input";
import { AddComponent } from './films-info/add/add.component';
import { EditComponent } from './films-info/edit/edit.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import { UserInfoComponent } from './user-info/user-info.component';
import { EditUserComponent } from './user-info/edit-user/edit-user.component';
import {MatSelectModule} from "@angular/material/select";
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { IncomePipe } from './income.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    FilmsInfoComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    SearchResComponent,
    FilmsViewComponent,
    AddComponent,
    EditComponent,
    UserInfoComponent,
    EditUserComponent,
    NotAuthorizedComponent,
    IncomePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FlexLayoutModule,
        NgbModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        RouterLink,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatButtonToggleModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
