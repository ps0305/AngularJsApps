var app = angular.module('nestedAsApp', []);

//parent controller
app.controller('parentAsCtrl', function() {
  this.test = '';
});
//child controller
app.controller('childAsCtrl', function() {
  //this.test = '';
});
