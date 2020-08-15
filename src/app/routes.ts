import {Routes} from '@angular/router'
import { CompetitionsComponent } from './Competitions/competitions/competitions.component'
import { AppComponent } from './app.component'
import { CompetitionDetailsComponent } from './Competitions/CompetitionDetails/CompetitionDetails.component'

export const appRoutes: Routes = [
    {path: 'competitions', component: CompetitionsComponent},
    //CompetitionDetailsComponent    
    {path: 'competitions/:id', component: CompetitionDetailsComponent},
    {path: '**', component: CompetitionsComponent, pathMatch: 'full'}
]