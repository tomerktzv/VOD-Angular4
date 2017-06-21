import { Component, OnInit } from '@angular/core';
import { sharedApiService } from "../sharedServices/sharedServices";
import { movie } from '../movie/movie';

@Component({
  selector: 'app-homepage',
  providers: [sharedApiService],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  films : movie[];
  isErr: boolean = false;

  constructor(private sharedService : sharedApiService) { }

  ngOnInit() {
    this.sharedService.getAllMovies()
      .then((films : movie[]) => {
        if (films.constructor.name == "Array") {
          this.isErr = false;
          this.films = films;
        }
        else {
          this.isErr = true;
          this.films = null;
        }
      })
  }

}
