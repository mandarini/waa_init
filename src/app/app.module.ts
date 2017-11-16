import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GmapModule} from './gmap.module';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './main/home/home.component';
import { PressComponent } from './main/press/press.component';
import { AboutComponent } from './main/about/about.component';
import { MainComponent } from './main/main.component';
import { GmapComponent } from './main/home/gmap/gmap.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    PressComponent,
    AboutComponent,
    MainComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    /**
    Without the callback
    */
    GmapModule.forRoot({
          maps_url: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAwVnwE1bEZf_Bkk_pSkGM0XlBSXJocVUY'
      })
  ],
  providers: [AngularFireDatabase, AngularFireDatabaseModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
