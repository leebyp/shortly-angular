// instantiates the model 'app' in angular using the dependency ngRoute

var app = angular.module('app', ['ngRoute']);

// instantiate the HomeController for the links view data
app.controller('HomeController', function($scope, $http){
  $http.get('/links').success(function(data){
    $scope.links = data;
  })
  $scope.urlUsed = function(linkCode){
    console.log(linkCode);
  }
})

// instantiate the HomeController for the shorten view data
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

// configures client side routing in app
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  // routes to use home.html and HomeController when at '/'
   .when('/', {
    templateUrl: '/client/templates/home.html',
    controller: 'HomeController'
  })
  // routes to use shorten.html and ShortenController when at '/create'
   .when('/create', {
    templateUrl: '/client/templates/shorten.html',
    controller: 'ShortenController'
  })
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
}]);