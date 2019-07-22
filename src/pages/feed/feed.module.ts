import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { FeedDetalhesPage } from '../feed-detalhes/feed-detalhes';

@NgModule({
  declarations: [
    FeedPage,
    FeedDetalhesPage
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
  ],
  entryComponents: [
    FeedDetalhesPage
  ]
})
export class FeedPageModule {}
