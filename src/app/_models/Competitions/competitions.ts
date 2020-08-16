import { Filters } from '../Teams/filters';
import { Competition } from './competition';

export interface Competitions {
    count: number;
    filters: Filters;
    competitions: Competition[];
}
