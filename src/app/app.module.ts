import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WelcomeComponent,
    ResultComponent,
    UpcomingComponent,
    TopRatedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
