import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  storageKey = 'films';
  films = [{
    id: 1,
    name: "The Shawshank Redemption",
    cover: "https://m.media-amazon.com/images/I/51SZp7RhtQL._AC_.jpg",
    year: 1994,
    income: 58.5,
    created_at: "2023-05-09T12:30:00.000Z"
  },
    {
      id: 2,
      name: "The Godfather",
      cover: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 1972,
      income: 268.5,
      created_at: "2023-05-08T10:15:00.000Z"
    },
    {
      id: 3,
      name: "The Dark Knight",
      cover: "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
      year: 2008,
      income: 1004.9,
      created_at: "2023-05-07T18:45:00.000Z"
    },
    {
      id: 4,
      name: "12 Angry Men",
      cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/800px-12_Angry_Men_%281957_film_poster%29.jpg",
      year: 1957,
      income: 5.5,
      created_at: "2023-05-06T08:00:00.000Z"
    },
    {
      id: 5,
      name: "Schindler's List",
      cover: "https://m.media-amazon.com/images/I/71vKAOMv8nL.jpg",
      year: 1993,
      income: 321.2,
      created_at: "2023-05-05T21:20:00.000Z"
    },
    {
      id: 6,
      name: "The Lord of the Rings: The Return of the King",
      cover: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      year: 2003,
      income: 1141.0,
      created_at: "2023-05-04T14:10:00.000Z"
    },
    {
      id: 7,
      name: "Pulp Fiction",
      cover: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 1994,
      income: 213.9,
      created_at: "2023-05-03T07:45:00.000Z"
    },
    {
      id: 8,
      name: "The Good, the Bad and the Ugly",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg",
      year: 1966,
      income: 25.1,
      created_at: "2023-05-02T12:00:00.000Z"
    },
    {
      id: 9,
      name: "Forrest Gump",
      cover: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      year: 1994,
      income: 677.4,
      created_at: "2023-05-01T15:30:00.000Z"
    },
    {
      id: 10,
      name: "Inception",
      cover: "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_french_original_film_art_399c9bc0-2060-432c-a24b-873162f00abd_600x.jpg?v=1643315917",
      year: 2010,
      income: 829.9,
      created_at: "2023-04-30T11:20:00.000Z"
    }]

  loadFilms(): Observable<any> | null {
    const storedFilms = localStorage.getItem(this.storageKey);
    if (storedFilms) {
      this.films = JSON.parse(storedFilms);
      return of(this.films);
    } else {
      return null;
    }
  }
}
