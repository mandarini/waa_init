import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GmapModule} from './gmap.module';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './main/home/home.component';
import { PressComponent } from './main/press/press.component';
import { AboutComponent } from './main/about/about.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './main/home/map/map.component';
import { GmapComponent } from './main/about/gmap/gmap.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    PressComponent,
    AboutComponent,
    MainComponent,
    MapComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**
    Without the callback
    */
    GmapModule.forRoot({
          url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAwVnwE1bEZf_Bkk_pSkGM0XlBSXJocVUY'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
