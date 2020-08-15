import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompetitionsComponent } from './Competitions/competitions/competitions.component';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { CompetitionDetailsComponent } from './Competitions/CompetitionDetails/CompetitionDetails.component';


@NgModule({
   declarations: [
      AppComponent,
      CompetitionsComponent,
      NavComponent,
      CompetitionDetailsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
