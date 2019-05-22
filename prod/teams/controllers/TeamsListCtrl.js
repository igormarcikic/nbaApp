var app;
(function (app) {
    var teams;
    (function (teams) {
        var ListCtrl;
        (function (ListCtrl) {
            var TeamList = /** @class */ (function () {
                function TeamList(DataPullService) {
                    var _this = this;
                    this.DataPullService = DataPullService;
                    this.westConf = 'West';
                    this.eastConf = 'East';
                    this.posEast = 1;
                    this.posWest = 1;
                    this.DataPullService.getTeamStandings().then(function (result) {
                        _this.teamsList = result.data;
                        console.log(_this.teamsList);
                    });
                }
                TeamList.prototype.countEast = function () {
                    return this.posEast++;
                };
                TeamList.prototype.countWest = function () {
                    return this.posWest++;
                };
                TeamList.$inject = ['dataPullService'];
                return TeamList;
            }());
            angular
                .module('nbaApp')
                .controller('TeamList', TeamList);
        })(ListCtrl = teams.ListCtrl || (teams.ListCtrl = {}));
    })(teams = app.teams || (app.teams = {}));
})(app || (app = {}));
