import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  private movie: any;
  private movieId;
  public generos: any;
  
  private loading: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.movieId = this.navParams.get("movieId");
    console.log(this.movieId);
    this.openLoading();
    this.loadMovie();
    this.closeLoading();
    
  }

  openLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando Filmes...'
    }); 
  
    this.loading.present();
  }

  closeLoading() {
    this.loading.dismiss();
  }

  loadMovie() {
    this.movieProvider.getMovieDetails(this.movieId).then(data => {
      this.movie = data;
      this.movie.vote_average *= 10;
      this.generos = this.movie.genres;
    });
  }

}
