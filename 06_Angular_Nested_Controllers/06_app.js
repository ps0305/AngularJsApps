var app = angular.module('nestedApp', []);

//creation of parent controller
app.controller('parentCtrl', function($scope) {
  $scope.test = '';
});

//creation of child controller
app.controller('childCtrl', function($scope) {
  $scope.test = '';
  //if we don't define one ,then controller from parent will be copied.
});
