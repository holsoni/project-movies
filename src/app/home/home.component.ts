import { Component } from '@angular/core';
import {FilmsService} from "../../service/films.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  films:any[] = [];
  HTMLSelectElement: any;

  constructor(private filmService:FilmsService) {

  }

  ngOnInit(){
    this.filmService.loadFilms()?.subscribe((data) => this.films = data);
    console.log(this.films);
  }

  sortMovies(sortBy: string) {
    switch(sortBy) {
      case 'name':
        this.films.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'year':
        this.films.sort((a, b) => a.year - b.year);
        break;
      case 'created':
        this.films.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime());
        break;
      default:
        // default sorting is by name
        this.films.sort((a, b) => a.name.localeCompare(b.name));
    }
  }


  addToFavorites(film: any) {

  }
}
