import { Area } from './area';
import { CurrentSeason } from './CurrentSeason';

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code?: any;
    emblemUrl?: any;
    plan: string;
    currentSeason: CurrentSeason;
    numberOfAvailableSeasons: number;
    lastUpdated: Date;
}
