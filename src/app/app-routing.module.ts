import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movie/movie.component';
import { ResultComponent } from './result/result.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LatestComponent } from './latest/latest.component';

const routes: Routes = [
  {
    path:'welcome',
    component: WelcomeComponent
  },
  {
    path:'movie',
    component: MovieComponent
  },
  {
    path:'result',
    component: ResultComponent
  },
  {
    path:'upcoming',
    component: UpcomingComponent
  },
  {
    path:'latest',
    component: LatestComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
