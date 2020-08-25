export interface League {
    name: string;
    country: string;
    logo: string;
    flag: string;
}

export interface HomeTeam {
    team_id: number;
    team_name: string;
    logo: string;
}

export interface AwayTeam {
    team_id: number;
    team_name: string;
    logo: string;
}

export interface Score {
    halftime?: any;
    fulltime?: any;
    extratime?: any;
    penalty?: any;
}

export interface Fixture {
    fixture_id: number;
    league_id: number;
    league: League;
    event_date: Date;
    event_timestamp: number;
    firstHalfStart?: any;
    secondHalfStart?: any;
    round: string;
    status: string;
    statusShort: string;
    elapsed: number;
    venue: string;
    referee?: any;
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
    goalsHomeTeam?: any;
    goalsAwayTeam?: any;
    score: Score;
}

export interface Api {
    results: number;
    fixtures: Fixture[];
}

export interface Fixtures {
    api: Api;
}