angular.module('baeDay', [])
  .controller('BaeDayController', function() {
    var baeDay = this;
    baeDay.activities = [];

    baeDay.addActivity = function() {
      baeDay.activities.push({text:baeDay.activityText});
      baeDay.activityText = '';
    };
  });