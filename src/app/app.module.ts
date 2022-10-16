import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LivescoreComponent } from './livescore/livescore.component';
import { MatchsummaryComponent } from './matchsummary/matchsummary.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NewmatchadditionComponent } from './newmatchaddition/newmatchaddition.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';


import { FormsModule,FormBuilder, FormGroup, Validator} from '@angular/forms';
import { LivescoreadminComponent } from './livescoreadmin/livescoreadmin.component';
import { SummaryadminComponent } from './summaryadmin/summaryadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewmatchadditionComponent,
    LivescoreComponent,
    MatchsummaryComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LivescoreadminComponent,
    SummaryadminComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTabsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
