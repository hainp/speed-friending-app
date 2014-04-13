'use strict';

// This line is to pass jshint
var angular = angular || null;

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
            $routeProvider.otherwise({redirectTo: '/'});
            $locationProvider.html5Mode(true);
        }
       ]);
