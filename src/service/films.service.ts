import { Injectable } from '@angular/core';
import {find, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  storageKey = 'films';
  favorites =[{
    id: 1,
    name: "The Shawshank Redemption",
    cover: "https://m.media-amazon.com/images/I/51SZp7RhtQL._AC_.jpg",
    year: 1994,
    income: 58500000,
    created_at: "2023-05-09T12:30:00.000Z",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    authors: ["Frank Darabont", "Stephen King"],
    genre: "Drama"
  }];
   films = [
    {
      id: 1,
      name: "The Shawshank Redemption",
      cover: "https://m.media-amazon.com/images/I/51SZp7RhtQL._AC_.jpg",
      year: 1994,
      income: 58500000,
      created_at: "2023-05-09T12:30:00.000Z",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      authors: ["Frank Darabont", "Stephen King"],
      genre: "Drama"
    },
    {
      id: 2,
      name: "The Godfather",
      cover: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 1972,
      income: 268500000,
      created_at: "2023-05-08T10:15:00.000Z",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      authors: ["Francis Ford Coppola", "Mario Puzo"],
      genre: "Crime"
    },
    {
      id: 3,
      name: "The Dark Knight",
      cover: "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
      year: 2008,
      income: 1004900000,
      created_at: "2023-05-07T18:45:00.000Z",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      authors: ["Christopher Nolan", "Jonathan Nolan", "David S. Goyer"],
      genre: "Action"
    },
    {
      id: 4,
      name: "12 Angry Men",
      cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/800px-12_Angry_Men_%281957_film_poster%29.jpg",
      year: 1957,
      income: 5500000,
      created_at: "2023-05-06T08:00:00.000Z",
      description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      authors: ["Sidney Lumet", "Reginald Rose"],
      genre: "Drama"
    },
     {
       id: 5,
       name: "Schindler's List",
       cover: "https://m.media-amazon.com/images/I/71vKAOMv8nL.jpg",
       year: 1993,
       income: 321200000,
       created_at: "2023-05-05T21:20:00.000Z",
       description: "Schindler's List is a 1993 American historical drama film directed and produced by Steven Spielberg. It is based on the novel Schindler's Ark by Australian novelist Thomas Keneally. The film follows Oskar Schindler, a German businessman who saved the lives of more than a thousand Jewish refugees during the Holocaust by employing them in his factories.",
       authors: ["Steven Spielberg", "Thomas Keneally"],
       genre: "Drama"
     },
     {
       id: 6,
       name: "The Lord of the Rings: The Return of the King",
       cover: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
       year: 2003,
       income: 1141000000,
       created_at: "2023-05-04T14:10:00.000Z",
       description: "The Lord of the Rings: The Return of the King is a 2003 epic fantasy adventure film directed by Peter Jackson, based on the third volume of J. R. R. Tolkien's The Lord of the Rings. The film follows hobbits Frodo and Sam as they approach the fiery depths of Mount Doom to destroy the One Ring and end Sauron's reign over Middle-earth.",
       authors: ["Peter Jackson", "Fran Walsh", "Philippa Boyens"],
       genre: "Fantasy"
     },
     {
       id: 7,
       name: "Pulp Fiction",
       cover: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
       year: 1994,
       income: 213900000,
       created_at: "2023-05-03T07:45:00.000Z",
       description: "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino. The film is known for its eclectic dialogue, ironic mix of humor and violence, nonlinear storyline, and a host of cinematic allusions and pop culture references.",
       authors: ["Quentin Tarantino", "Roger Avary"],
       genre: "Crime"
     },
     {
       id: 8,
       name: "The Good, the Bad and the Ugly",
       cover: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg",
       year: 1966,
       income: 25100000,
       created_at: "2023-05-02T12:00:00.000Z",
       description: "The Good, the Bad and the Ugly is a 1966 Italian epic Spaghetti Western film directed by Sergio Leone, starring Clint Eastwood, Lee Van Cleef, and Eli Wallach in the title roles.",
       authors: ["Sergio Leone", "Luciano Vincenzoni"],
       genre: "Western"
     },
     {
       id: 9,
       name: "Forrest Gump",
       cover: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
       year: 1994,
       income: 677.4,
       created_at: "2023-05-01T15:30:00.000Z",
       description: "Forrest Gump is a 1994 American comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It stars Tom Hanks, Robin Wright, Gary Sinise, and Sally Field.",
       authors: ["Winston Groom", "Eric Roth"],
       genre: "Comedy-Drama"
     },
     {
       id: 10,
       name: "Inception",
       cover: "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_french_original_film_art_399c9bc0-2060-432c-a24b-873162f00abd_600x.jpg?v=1643315917",
       year: 2010,
       income: 829900000,
       created_at: "2023-04-30T11:20:00.000Z",
       description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas. The film stars Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Ellen Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.",
       authors: ["Christopher Nolan"],
       genre: "Science Fiction"
     }]

  getAllFilms(): Observable<any> | null {
/*
    localStorage.setItem(this.storageKey, JSON.stringify(this.films));
*/
    let storedFilms = localStorage.getItem(this.storageKey);
    if (storedFilms) {
      // @ts-ignore
      storedFilms = JSON.parse(localStorage.getItem(this.storageKey));
      return of(storedFilms);
    } else {
      console.log("No films found in localStorage");
      return null;
    }
  }

  getFavorites(userId:any):Observable<any>{
    let favorites = JSON.parse(localStorage.getItem(userId) || "[]");
    if (!favorites){
      localStorage.setItem(userId,JSON.stringify(null));
    }
    return of(favorites);
  }

  addToFavorites(film: any, userId: any) {
    console.log("Film added", film.name);

    this.favorites.push(film);
    let favorites = JSON.parse(localStorage.getItem(userId) || "[]");
    console.log(favorites);
    if (!favorites) {
      favorites = [film]; // create new array if it doesn't exist
      console.log(favorites);
    } else {
      favorites.push(film);
    }
    localStorage.setItem(userId, JSON.stringify(favorites));
    console.log(JSON.parse(localStorage.getItem(userId) || "[]"));
  }

  removeFromFavorites(film: any,userId:any) {
    let favorites = JSON.parse(localStorage.getItem(userId) || "[]");
    // @ts-ignore
    let index = favorites.findIndex((el) => el.id == film.id);
    favorites.splice(index, 1);
    localStorage.setItem(userId, JSON.stringify(favorites));
    let favoriteIndex = this.favorites.findIndex((el) => el.id == film.id);
    this.favorites.splice(favoriteIndex, 1);
  }

  isFavorite(film: any, userId:any): boolean {
    let favorites = JSON.parse(localStorage.getItem(userId) || "[]");
    return favorites.find((favorite: any) => favorite.id === film.id);
  }

  getAllByName(name: string): Observable<any> {
    // @ts-ignore
    // @ts-ignore
    return this.getAllFilms().pipe(
      // @ts-ignore

      map(films => films.filter(film => film.name.startsWith(name)))
    );
  }

  deleteById(id: number): void {
    let films = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    let index = this.films.findIndex((film) => film.id == id);
      films.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(films));
      this.films.splice(index, 1);
      // @ts-ignore
      console.log(JSON.parse(localStorage.getItem(this.storageKey)));
  }

  addFilm(film:any){
     this.films.push(film);
    const films = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    films.push(film);
    localStorage.setItem(this.storageKey, JSON.stringify(films));
  }

  getFilmById(id: any):Observable<any> {
    let films = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    // @ts-ignore

    return of(films.find(film => film.id == id));
  }

  update(id: any,edited:any) {
     let film;
     this.getFilmById(id).subscribe(data => film = data);
     this.deleteById(id);
     this.addFilm(edited);

  }
}
