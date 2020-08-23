    export interface Country {
        country: string;
        code: string;
        flag: string;
    }

    export interface Api {
        results: number;
        countries: Country[];
    }

    export interface Countries {
        api: Api;
    }

