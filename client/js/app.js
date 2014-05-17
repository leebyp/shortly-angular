var app = angular.module('app', ['ngRoute']);

app.controller('HomeController', function($scope, $http){
  $http.get('/links').success(function(data){
    $scope.links = data;
  })
})

app.controller('ShortenController', function($scope, $http){
  
})

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/client/templates/home.html',
    controller: 'HomeController'
  })
   .when('/create', {
    templateUrl: '/client/templates/shorten.html',
    controller: 'ShortenController'
  })
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
}]);