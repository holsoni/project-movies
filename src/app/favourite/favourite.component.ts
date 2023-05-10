import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../service/films.service";
import {UserService} from "../../service/users.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit{

  films:any;
  constructor(private filmService:FilmsService, private userService:UserService){

  }

  ngOnInit(){
    let user_id:number;
    // @ts-ignore
    this.userService.getCurrentUserId().subscribe(data => user_id = data);
    // @ts-ignore
    this.filmService.getFavorites(user_id).subscribe(data => this.films=data);
  }

  reload(){
    this.ngOnInit();
  }






}
