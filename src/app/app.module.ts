import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CompetitionsComponent } from './Competitions/competitions/competitions.component';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { CompetitionDetailsComponent } from './Competitions/CompetitionDetails/CompetitionDetails.component';
import { CountriesComponent } from './Countries/countries/countries.component';
import { FixtureDetailsComponent } from './Competitions/CompetitionDetails/Fixtures/FixtureDetails/FixtureDetails.component';


@NgModule({
   declarations: [
      AppComponent,
      CompetitionsComponent,
      NavComponent,
      CompetitionDetailsComponent,
      CountriesComponent,
      FixtureDetailsComponent  
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
