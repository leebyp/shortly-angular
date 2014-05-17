var app = angular.module('app', ['ngRoute']);

app.controller('HomeController', function($scope, $http){
  $http.get('/links').success(function(data){
    $scope.links = data;
  })
  $scope.urlUsed = function(linkCode){
    console.log(linkCode);
  }
})

app.controller('ShortenController', function($scope, $http){
  $scope.saveLink = function(){
    if($scope.form.$valid){
      $http.post('/links', {url: $scope.newurl})
        .success(function(){
          console.log($scope.newurl, "posted!")
        })
        .error(function(){
          console.log('error in url!')
        })
    } else {
      $scope.invalid = true;
    }
  };
});

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