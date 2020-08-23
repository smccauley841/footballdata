export interface Fixtures {
    events: boolean;
    lineups: boolean;
    statistics: boolean;
    players_statistics: boolean;
}

export interface Coverage {
    standings: boolean;
    fixtures: Fixtures;
    players: boolean;
    topScorers: boolean;
    predictions: boolean;
    odds: boolean;
}

export interface League {
    league_id: number;
    name: string;
    type: string;
    country: string;
    country_code: string;
    season: number;
    season_start: string;
    season_end: string;
    logo: string;
    flag: string;
    standings: number;
    is_current: number;
    coverage: Coverage;
}

export interface Api {
    results: number;
    leagues: League[];
}

export interface Leagues {
    api: Api;
}