angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainService) {

    
     $scope.travelInfo = mainService.travelInfo
})