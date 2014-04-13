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
    $scope.friends = [];

    $scope.add = function() {
        $scope.member.lurves =
            $scope.member.lurves ?
            $scope.member.lurves.split(',').map(function(l) {
                return Number(l);
            }) : [];

        $scope.member.likes =
            $scope.member.likes ?
            $scope.member.likes.split(',').map(function(l) {
                return Number(l);
            }) : [];

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
        $scope.lovers = match('lurves');
        $scope.friends = match('likes');
    };

    var match = function(type) {
        var matches = [],
            members = $scope.members.slice(0);

        members.forEach(function(aMember) {
            if (aMember[type]) {
                aMember[type].forEach(function(memNo, i) {
                    var mem = members.filter(function(member) {
                        return member.no === memNo;
                    })[0];

                    if (mem && mem[type].indexOf(aMember.no) >= 0) {
                        // Lurve match
                        matches.push([aMember, mem]);
                        // Remove ref
                        aMember[type].splice(i, 1);
                    }
                });
            }
        });
        return matches;
    };
}
