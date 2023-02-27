import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TVshowAiringComponent } from './components/t-vshow-airing/t-vshow-airing.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  {path : '' , redirectTo:'login' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'upcoming' , component:UpcomingComponent},
  {path:'watchlist' , component:WatchlistComponent},
  {path:'details/: id' , component:DetailsComponent},
  {path:'shows' , component:TvShowsComponent},
  {path:'airing' , component:TVshowAiringComponent},
  {path:'ShowDetails/: id' , component:TvDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }