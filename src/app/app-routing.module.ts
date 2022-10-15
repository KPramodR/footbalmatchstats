import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LivescoreComponent } from './livescore/livescore.component';
import { MatchsummaryComponent } from './matchsummary/matchsummary.component';
import { NewmatchadditionComponent } from './newmatchaddition/newmatchaddition.component'

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'newmatch', component: NewmatchadditionComponent},
  {path:'livescore', component: LivescoreComponent},
  {path:'matchsummary', component: MatchsummaryComponent},
  {path:'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
