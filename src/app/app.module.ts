import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './main/home/home.component';
import { PressComponent } from './main/press/press.component';
import { AboutComponent } from './main/about/about.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './main/home/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    PressComponent,
    AboutComponent,
    MainComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
