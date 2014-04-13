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
        $scope.lovers = $scope.matchLovers();
    };

    $scope.matchLovers = function() {
        var matches = [],
            members = $scope.members.slice(0);

        members.forEach(function(aMember) {
            aMember.lurves.forEach(function(memNo, i) {
                var mem = members.filter(function(member) {
                    return member.no === memNo;
                })[0];

                if (mem && mem.lurves.indexOf(aMember.no) >= 0) {
                    // Lurve match
                    matches.push([aMember, mem]);
                    // Remove ref
                    aMember.lurves.splice(i, 1);
                }
            });
        });
        return matches;
    };
}
