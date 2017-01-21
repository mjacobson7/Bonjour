angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './login.html',
      controller: 'mainController'
    })

    .state('home', {
      url: '/home',
      templateUrl: './home.html',
      controller: 'mainController'
    })

  });
