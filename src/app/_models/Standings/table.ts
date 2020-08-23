import { Team } from '../Teams/team';

export interface Table {
    position: number;
        team: Team;
        playedGames: number;
        won: number;
        draw: number;
        lost: number;
        points: number;
        goalsFor: number;
        goalsAgainst: number;
        goalDifference: number;
}
