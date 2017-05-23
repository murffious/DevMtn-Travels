angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainService, $stateParams) {

     $scope.packageInfo = mainService.packageInfo
     $scope.country = mainService.getCountry($stateParams.country)
})