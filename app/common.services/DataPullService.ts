module app.common.getData {
    interface IDataPullService {
        getTeamStandings(): app.teams.tClass.Team[];
    }

    export class DataPullService implements IDataPullService {
        static $inject = ['$http'];
        constructor(private $http) {}
        getTeamStandings(): app.teams.tClass.Team[] {
            return this.$http({
                method: 'JSONP',
                url: 'https://stats.nba.com/stats/leaguestandings?LeagueID=00&Season=2018-19&SeasonType=Regular+Season&SeasonYear=&callback=JSON_CALLBACK',
                // 2018-19
            });
        }
    }
    angular
        .module('common.services')
        .service('dataPullService',
            DataPullService);
}
