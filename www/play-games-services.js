var exec = require('cordova/exec');
var PLAY_GAMES_SERVICES = 'PlayGamesServices';

var PlayGamesServices = function () {
    this.name = PLAY_GAMES_SERVICES;
};

var successCallback = function (callback, result) {
    callback(result);
}

var actions = ['initialize', 'login', 'logOut', 'isLoggedIn',
    'submitScore', 'submitScoreNow', 'getPlayerScore', 'showAllLeaderboards', 'showLeaderboard',
    'unlockAchievement', 'unlockAchievementNow', 'incrementAchievement', 'incrementAchievementNow',
    'showAchievements', 'fetchPlayerInfo'];

actions.forEach(function (action) {
    PlayGamesServices.prototype[action] = function (data, success, failure) {
        var defaultSuccessCallback = function () {
            console.log(PLAY_GAMES_SERVICES + '.' + action + ': executed successfully');
        };

        var defaultFailureCallback = function () {
            console.warn(PLAY_GAMES_SERVICES + '.' + action + ': failed on execution');
        };

        if (typeof data === 'function') {
            // Assume providing successCallback as 1st arg and possibly failureCallback as 2nd arg
            failure = success || defaultFailureCallback;
            success = data;
            data = {};
        } else {
            data = data || {};
            success = success || defaultSuccessCallback;
            failure = failure || defaultFailureCallback;
        }

        exec(function (data) {
            console.log(PLAY_GAMES_SERVICES, "SUCCESS CALLBACK", data)
            successCallback(success, data);
        }, failure, PLAY_GAMES_SERVICES, action, [data]);
    };
});

module.exports = new PlayGamesServices();
