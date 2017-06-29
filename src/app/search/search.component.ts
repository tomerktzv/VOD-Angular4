import { Component, OnInit } from '@angular/core';
import { sharedApiService } from "../sharedServices/sharedServices";
import { movie } from '../movie/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieName: string;
  movieDate: string;
  films : movie[];
  isInvalidQuery : boolean = false;

  constructor(private sharedService : sharedApiService) { }

  ngOnInit() {
  }

  getMovieByInfo(movieDate: string, movieName: string) {
    this.sharedService.getMovieByDateAndName(movieDate, movieName)
      .then((films : movie[]) => {
        if (films.constructor.name == "Array") {
          this.films = films;
          console.log(films);
          this.isInvalidQuery = false;
        }
        else {
          this.films = null;
          this.isInvalidQuery = true;
        }
      });
  }
}
