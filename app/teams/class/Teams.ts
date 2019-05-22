module app.teams.tClass {
    export class Team implements app.teams.tInterface.ITeams {
        teamId: number;
        abbreviation: string;
        name: string;
        city: string;
        arena: string;
    }
}
