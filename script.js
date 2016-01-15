// Code goes here
var app = angular.module('demo',['slick']);

app.controller('Ctrl', function($scope) {
  $scope.images = [
    "http://vasyabigi.github.io/angular-slick/images/lazyfonz1.png",
    "http://vasyabigi.github.io/angular-slick/images/lazyfonz2.png",
    "http://vasyabigi.github.io/angular-slick/images/lazyfonz3.png",
    ];
});