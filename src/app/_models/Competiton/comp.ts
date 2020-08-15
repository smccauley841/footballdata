import { Area } from '../Competitions/area';
import { CurrentSeason } from '../Competitions/CurrentSeason';
import { Season } from './season';

export interface Comp {
    id: number;
        area: Area;
        name: string;
        code: string;
        emblemUrl?: any;
        plan: string;
        currentSeason: CurrentSeason;
        seasons: Season[];
        lastUpdated: Date;
    
}
