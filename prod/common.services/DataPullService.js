var app;
(function (app) {
    var common;
    (function (common) {
        var getData;
        (function (getData) {
            var DataPullService = /** @class */ (function () {
                function DataPullService($http) {
                    this.$http = $http;
                }
                DataPullService.prototype.getTeamStandings = function () {
                    return this.$http({
                        method: 'JSONP',
                        url: 'https://stats.nba.com/stats/leaguestandings?LeagueID=00&Season=2018-19&SeasonType=Regular+Season&SeasonYear=&callback=JSON_CALLBACK',
                    });
                };
                DataPullService.$inject = ['$http'];
                return DataPullService;
            }());
            getData.DataPullService = DataPullService;
            angular
                .module('common.services')
                .service('dataPullService', DataPullService);
        })(getData = common.getData || (common.getData = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
