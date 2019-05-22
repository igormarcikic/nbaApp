var app;
(function (app) {
    var teams;
    (function (teams) {
        var tClass;
        (function (tClass) {
            var Team = /** @class */ (function () {
                function Team() {
                }
                return Team;
            }());
            tClass.Team = Team;
        })(tClass = teams.tClass || (teams.tClass = {}));
    })(teams = app.teams || (app.teams = {}));
})(app || (app = {}));
