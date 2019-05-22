module app.teams.ListCtrl {
    interface ITeamsList {
        season: number;
        westConf: string;
        eastConf: string;
        teamsList: app.teams.tClass.Team[];
        posEast: number;
        posWest: number;
        countEast(): number;
        countWest(): number;
    }

    class TeamList implements ITeamsList {
        season: number;
        westConf = 'West';
        eastConf = 'East';
        teamsList: app.teams.tClass.Team[];
        posEast = 1;
        posWest = 1;
        countEast() {
            return this.posEast++;
        }
        countWest() {
            return this.posWest++;
        }

        static $inject = ['dataPullService'];
        constructor(private DataPullService: app.common.getData.DataPullService) {
            this.DataPullService.getTeamStandings().then(result => {
                this.teamsList = result.data;
                console.log(this.teamsList);
            });
        }
    }
    angular
        .module('nbaApp')
        .controller('TeamList',
            TeamList);
}
