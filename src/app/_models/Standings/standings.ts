import { Filters } from '../Teams/filters';
import { Competition } from '../Competitions/competition';
import { Season } from '../Competiton/season';
import { Standing } from './standing';

export interface Standings {
    filters: Filters;
        competition: Competition;
        season: Season;
        standings: Standing[];
}
