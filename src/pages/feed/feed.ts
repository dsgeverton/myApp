import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FeedDetalhesPage } from '../feed-detalhes/feed-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public movie_img_base_path = "https://image.tmdb.org/t/p/w500/";

  private movie:any = {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        "id": 99,
        "name": "Documentary"
      }
    ],
    homepage: "",
    id: 413323,
    imdb_id: "tt5852644",
    original_language: "en",
    original_title: "Deadpool: From Comics to Screen... to Screen",
    overview: "This documentary divided into five segments examines the source and its path to the movies, backstory, special effects story/character areas, cast and performances. It includes notes from Reynolds, Liefeld, Miller, Wernick, Reese, executive producers Aditya Sood and Stan Lee, co-creator/comics writer Fabian Nicieza, producer Simon Kinberg, comics writer Joe Kelly, specialty costume designer Russell Shinkle, makeup designer Bill Corso, production designer Sean Haworth, director of photography Ken Seng, executive producer/unit production manager John J. Kelly, previs supervisor Franck Balson, stunt coordinator Philip J. Silvera, visual effects supervisors Pauline Duvall and Jonathan Rothbart, visual effects producer Annemarie Griggs, 2nd unit director/stunt coordinator Robert Alonzo, special effects coordinator Alex Burdett, utility stunts Regis Harrington, composer Tom Holkenberg, and actors Morena Baccarin, TJ Miller, Brianna Hildebrand, Leslie Uggams, Ed Skrein, and Gina Carano.",
    popularity: 0,
    poster_path: "/chV0avy5ogIB2PMTInT4KpHDzwj.jpg",
    production_companies: [],
    production_countries: [],
    release_date: "2016-05-10",
    revenue: 0,
    runtime: 80,
    spoken_languages: [],
    status: "Released",
    tagline: "",
    title: "Deadpool: From Comics to Screen... to Screen",
    video: false,
    vote_average: 0,
    vote_count: 0
  }

  private post = {
    post_title: "Titulo",
    post_desc: "Descrição em JSON",
    post_img_path: "assets/imgs/Print Menu.png",
    post_date: "17 de Julho de 2019",
    post_qtd_likes: 5,
    post_qtd_comments: 1,
    user_liked: [
      {user_name: "Everton Gonçalves Json"}
    ],
    post_comments_users: [
      {
        user_id: "qsdasdas",
        user_name: "Everton",
        user_avatar: "src:avatar",
        user_message: "bla bla bla",
        comment_date: 1
      }
    ]
  }

  private user = {
    user_id: 123456,
    user_name: "Everton Gonçalves Json",
    user_email: "dsgeverton@gmail.com",
    user_img_path: "assets/imgs/57088312_333077373911337_4165462487153508352_n.jpg"
  }

  private class_name:string = "no-pressed";
  public lista_filmes = new Array<any>();

  public loading;
  public refresher;
  public isRefreshing = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ){
    // Constructor here

  }

  ionViewDidEnter() {
    this.abrirLoading();
    this.carregarFilmes();   
    this.fecharLoading();
  }

  abrirLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando Filmes...'
    }); 
  
    this.loading.present();
  }

  fecharLoading() {
    this.loading.dismiss();
  }

  public carregarFilmes() {
    this.movieProvider.getPopularMovies()
    .then(data => {
      this.movie = data;
      this.lista_filmes = this.movie.results;
    })
   
   
    // this.movieProvider.getPopularMovies().subscribe(
    //   data => {
    //     this.movie = data;
    //     this.lista_filmes = this.movie.results;
    //     console.log(this.lista_filmes[0]);
    //   }, error => {
    //     console.log(error);
    //   }
    // )
    if (this.isRefreshing) {
      this.refresher.complete();
      this.isRefreshing = false;
    }
    this.check_like(this.user);
  }

  public check_like(obj_user:any) {
    if (this.post.user_liked.length != 0){
      for (var u of this.post.user_liked){
        if (u.user_name == obj_user.user_name) {
        this.changeClass("");
        }
      }
    }
  }

  public curtir(obj_user:any):void {
    console.log(this.post.user_liked);

    console.log("Estou na função curtir.");
    var count = 0;

    if (this.post.user_liked.length == 0){
      this.post.user_liked.push(this.user);
      this.post.post_qtd_likes++;
      this.changeClass("");
      console.log("curti esse post!");
      console.log(this.post.user_liked);
      
    } else {
      for (var u of this.post.user_liked){
        console.log("Entrei");
      
        if (u.user_name == obj_user.user_name) {
        this.post.post_qtd_likes--;
        // delete this.post.user_liked[count];
        this.post.user_liked.splice(count);
        this.changeClass("no-pressed");
        console.log("Descurtir esse post");
        console.log(this.post.user_liked);

      } else {
        this.post.user_liked.push(this.user);
        this.post.post_qtd_likes++;
        this.changeClass("no-pressed");
        console.log("curti esse post!");
        console.log(this.post.user_liked);
      }
      count++;
    }
  }

    // if (this.class_name == "no-pressed") {
    //   this.post.post_qtd_likes++;
    //   this.changeClass("");
    // } else {
    //   this.post.user_liked.push(this.user);
    //   this.post.post_qtd_likes--;
    //   this.changeClass("no-pressed");
    // }
  }

  chamar_curtir() {
    console.log("Chamei a função curtir.");
    this.curtir(this.user);
  }

  public expand(): void {
    alert();

  }

  public changeClass(value:string): void {
    this.class_name = value;
  }

  public add_comment(): boolean {
    return true;
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  abrirDetalhes(movie) {
    this.navCtrl.push(FeedDetalhesPage, {movie: movie});
  }

}
