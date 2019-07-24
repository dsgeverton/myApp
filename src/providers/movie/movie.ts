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
  public lang:string = "pt-BR";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestsMovies() {
    return new Promise( resolve => {
      this.http.get(this.base_api_path + "movie/latest?api_key=" + this.getApiKey())
      .subscribe(data => {
        resolve(data);
        console.log("Promisse 'getLatestsMovies' result: ");
        console.log(data);
      }, err => {
        console.log(err);
      });
    }); 
  }

  getPopularMovies() {
    return new Promise( resolve => {
      this.http.get(this.base_api_path + "movie/popular?api_key=" + this.getApiKey() + "&language=" + this.lang)
      .subscribe(data => {
        resolve(data);
        console.log("Promisse 'getPopularMovies' result: ");
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMovieDetails(movieId) {
    return new Promise( resolve => {
      this.http.get(this.base_api_path + `movie/${movieId}?api_key=` + this.getApiKey() + "&language=" + this.lang)
      .subscribe(data => {
        resolve(data);
        console.log("Promisse 'getMovieDetails' result: ");
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getApiKey():string {
    return "be41082f28068797c65c559d00c85888";
  }
}
