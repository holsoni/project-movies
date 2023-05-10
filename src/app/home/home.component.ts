import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../service/films.service";
import {UserService} from "../../service/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  films:any[] = [];
  HTMLSelectElement: any;
  cardView = false;

  constructor(private filmService:FilmsService,private userService:UserService) {

  }

  ngOnInit(){
    this.filmService.getAllFilms()?.subscribe((data) => this.films = data);
    console.log(this.films);
    this.userService.getCurrentUser();
  }

}
