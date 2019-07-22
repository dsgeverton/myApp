import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  public base_api_path:string = "https://api.themoviedb.org/3/";
  public api_key:string = "be41082f28068797c65c559d00c85888";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestsMovies() {
    return this.http.get(this.base_api_path + "movie/latest?api_key=" + this.api_key);
  }

  getPopularMovies() {
    return this.http.get(this.base_api_path + "movie/popular?api_key=" + this.api_key);
  }

}
