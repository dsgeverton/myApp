import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-detalhes',
  templateUrl: 'feed-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FeedDetalhesPage {
  public movie_img_base_path = "https://image.tmdb.org/t/p/w500";
  public movie: any;
  public movieId;
  public generos: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.movieId = this.navParams.get("movieId");
    console.log(this.movieId);
    this.movieProvider.getMovieDetails(this.movieId).then(data => {
      this.movie = data;
      this.generos = this.movie.genres;
      this.movie.vote_average *= 10;
    });
  }

}
