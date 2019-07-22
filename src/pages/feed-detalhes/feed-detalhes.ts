import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedDetalhesPage {
  public movie_img_base_path = "https://image.tmdb.org/t/p/w500/";
  public movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.movie = this.navParams.get("movie");
    console.log(this.movie);
  }

}
