import { Winner } from './winner';

export interface Season {
    id: number;
        startDate: string;
        endDate: string;
        currentMatchday?: number;
        winner: Winner;
}
