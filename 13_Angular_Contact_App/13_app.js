var app = angular.module('contactApp', []);
app.controller('contactAppCtrl', function($scope, $http) {
  $scope.contactList = null;
  $http
    .get(
      'https://gist.githubusercontent.com/ps0305/ce23e65c6758ccf65ed680ea9e8a7c73/raw/95c4e3406e7d6b3d77ca2caa30f7929b52c68fba/contacts.json'
    )
    .then(function(response) {
      $scope.contactList = response.data.contacts;
      //console.log($scope.contactList);
    });
  $scope.selectPerson = function(index) {
    $scope.selectedPerson = $scope.contactList[index];
  };
});
