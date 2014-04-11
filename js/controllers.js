'use strict';

/* Controllers */

// These lines are to pass jshint
var angular = angular || null;

angular.module('myApp.controllers', []).
    controller('HomeCtrl', ['$scope', '$location', '$http', HomeCtrl]);

function HomeCtrl($scope, $location, $http) { }
