import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmsService} from "../../service/films.service";

@Component({
  selector: 'app-films-info',
  templateUrl: './films-info.component.html',
  styleUrls: ['./films-info.component.css']
})
export class FilmsInfoComponent implements OnInit{

  name:string='';
  films:any[]=[];
  displayedColumns: string[] = ['id', 'name', 'cover', 'year','income','authors',
    'genre','created_at','acts'];

  constructor(private route:ActivatedRoute, private filmService:FilmsService) {
  }

  ngOnInit(){
    this.filmService.getAllFilms()?.subscribe((data) => this.films = data);
    console.log(this.films);
  }

  deleteFilm(id:any){
    this.filmService.deleteById(id);
    this.ngOnInit();
  }
  getByName(){
    this.filmService.getAllByName(this.name).subscribe(data =>this.films = data);
  }






}

