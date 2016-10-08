
var app = angular.module('board' , []);
app.controller('SaintBoardCtrl',function($scope,$http){
  $scope.posts;
  $scope.submitPost = function(){
    //send data to server code
  }
  $scope.getPostsRating(){
    //ask server for data
    //populatelist(through ng-repeat)
  }
  $scope.getPostsDate(){

  }
  $scope.formatDate(date){
    return moment(date).format('MMMM Do YYYY [at] h:mm:ss a');
  }
});
$(document).ready(function(){
  angular.bootstrap(document, ['board']);
});
