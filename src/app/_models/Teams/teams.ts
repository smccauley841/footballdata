import { Competition } from '../Competitions/competition';
import { Season } from '../Competiton/season';
import { Team } from './team';
import { Filters } from './filters';

export interface Teams {
    count: number;
        filters: Filters;
        competition: Competition;
        season: Season;
        teams: Team[];
}
