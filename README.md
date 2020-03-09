Cordova Plugin Google Play Services
===================================

![npm](https://img.shields.io/npm/v/cordova-plugin-google-play-game-services?style=for-the-badge) 

[cordova-plugin-google-play-game-services](https://www.npmjs.com/package/cordova-plugin-google-play-game-services)
========================

Cordova Plugin For Google Play Games Service

### Before you start

Setup **Leaderboard** and **Achievement** in Google Play Developer Console https://developers.google.com/games/services/android/quickstart

## Install

```
cordova plugin add cordova-plugin-google-play-game-services --variable APP_ID=YOUR_APP_ID
```

### NOTE 

This plugin went with event based approach instead of callbacks. I needed a quick solution and events were easy to implement. Also, I just copied code from existing plugins and made few changed to suite my needs. Works for me, please be advised before using this plugin for your app. 

## Usage

## Initliaze the plugin, and events  
You might want to setup your listener right after `deviceready` event is fired. 

```
// fired when silent login is successul
document.addEventListener("play.CONNECTED", ()=>{
  // your code here 
})

document.addEventListener("play.SILENT_SIGNED_IN_FAILED",  () => {
  // when silent login is failed. Show login button to user or try manual login.
})

document.addEventListener("play.SILENT_SIGNED_IN_SUCCESS",  () => {
  // when silent login is successful
})

document.addEventListener("play.PLAYER_INFO",  (data) => {
  // when player info is fetched 
  // data.playerId is id of player 
  // data.displayName is name of player 
})

document.addEventListener("play.SIGNIN_REQUIRED",  () => {
  // user can signout of your game using play games app. This event is fired you try to perform some action but user is logged out. show login button to user in this case.
})
 

// other useful events

play.SIGN_IN_FAILED  
play.SIGN_IN_SUCCESS
play.SHOW_ACHIEVEMENT_SUCCESS
play.SHOW_ACHIEVEMENT_FAILED
play.SHOW_LEADERBOARD_SUCCESS
play.SUBMIT_SCORE_SUCCESS
play.SHOW_LEADERBOARD_FAILED
```

```
// this should be your first call after setting up events. This will also try to silent signin
cordova.plugins.playGamesServices.initialize();
```

#### Sign in
```
cordova.plugins.playGamesServices.login();
```

### Show leaderboard 
```
cordova.plugins.playGamesServices.showAllLeaderboards();
```

### Submit score 
```
cordova.plugins.playGamesServices.submitScoreNow({score: 123, leaderBoardId: "ID"});
```

### But why another plugin? 

Well, most of existing plugins are old now. Couldn't find any plugin with silent login feature which was important for me. 


## License

[MIT License](http://ilee.mit-license.org)

