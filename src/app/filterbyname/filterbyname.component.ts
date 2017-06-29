import { Component, OnInit } from '@angular/core';
import { sharedApiService } from "../sharedServices/sharedServices";
import { movie } from '../movie/movie';

@Component({
  selector: 'app-filterbyname',
  templateUrl: './filterbyname.component.html',
  styleUrls: ['./filterbyname.component.css']
})
export class FilterbynameComponent implements OnInit {
  movieName: string;
  films : movie[];
  isInvalidQuery : boolean = false;

  constructor(private sharedService : sharedApiService) { }

  ngOnInit() {
  }

  getMovieByName(movieName: string) {
    console.log(movieName);
    this.sharedService.getMovieByName(movieName)
      .then((films : movie[]) => {
        this.films = films;
        this.isInvalidQuery = false;
      });
  }

}
