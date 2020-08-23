import {Routes} from '@angular/router'
import { CompetitionsComponent } from './Competitions/competitions/competitions.component'
import { AppComponent } from './app.component'
import { CompetitionDetailsComponent } from './Competitions/CompetitionDetails/CompetitionDetails.component'
import { CountriesComponent } from './Countries/countries/countries.component'

export const appRoutes: Routes = [
    {path: 'competitions', component: CompetitionsComponent},
    //CompetitionDetailsComponent    
    {path: 'competitions/:country', component: CompetitionsComponent},
    {path: 'competitions/:country/:id', component: CompetitionDetailsComponent},
    {path: 'countries', component: CountriesComponent},
    {path: '**', component: CompetitionsComponent, pathMatch: 'full'}
]