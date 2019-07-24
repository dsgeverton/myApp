import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { FeedDetalhesPage } from '../feed-detalhes/feed-detalhes';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    FeedPage,
    FeedDetalhesPage
  ],
  imports: [
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    IonicPageModule.forChild(FeedPage),
  ],
  entryComponents: [
    FeedDetalhesPage
  ]
})
export class FeedPageModule {}
