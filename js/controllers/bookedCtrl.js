angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainService,  $stateParams) {

  $scope.ids = mainService.getId($stateParams.id);
})