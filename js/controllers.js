'use strict';

/* Controllers */

// These lines are to pass jshint
var angular = angular || null;

angular.module('myApp.controllers', []).
    controller('HomeCtrl', ['$scope', HomeCtrl]);

function HomeCtrl($scope) {
    $scope.members = [];
    $scope.member = {};
    $scope.lovers = [];

    $scope.add = function() {
        $scope.member.lurves = $scope.member.lurves.split(',').map(function(l) {
            return Number(l);
        });
        $scope.member.likes = $scope.member.likes.split(',').map(function(l) {
            return Number(l);
        });
        $scope.members.push($scope.member);
        $scope.member = {};
    };

    $scope.newData = function() {
        $scope.members = [];
        $scope.member = {};
    };

    $scope.exportData = function() {
        console.log('Export Function');
    };

    $scope.matchData = function() {
        console.log('Match Function');
    };

    this.matchLovers = function() {
    };
}
