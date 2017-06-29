/**
 * Created by tomerktzv on 13/06/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { movie } from '../movie/movie';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class sharedApiService {
  constructor(private http: Http) {}
  url: string = 'https://ordered-movies.herokuapp.com';

  getAllMovies(): Promise<movie[]> {
    return this.http.get(`${this.url}/getAllOrderedMovies`)
      .toPromise()
      .then(response => response.json() as movie[])
      .catch(err => err.json());
  }

  getMovieByDateAndName(_date: string, _name: string): Promise<movie[]> {
    return this.http.get(`${this.url}/getOrderedMoviesByDateAndName/${_date}/${_name}`)
      .toPromise()
      .then(response => response.json() as movie[])
      .catch(err => err.json());
  }

  getMovieByName(_name: string): Promise<movie[]> {
    return this.http.post(`${this.url}/getOrederedMovie/`, {movieName:_name})
      .toPromise()
      .then(response => response.json() as movie[])
      .catch(err => err.json());
  }

}
