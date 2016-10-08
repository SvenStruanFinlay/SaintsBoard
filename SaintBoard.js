
var app = angular.module('board' , []);
app.controller('SaintBoardCtrl',function($scope,$http){
  $scope.posts=[];
  $scope.submitPost= function(postText){
    //send data to server code
  }
  $scope.submitComment= function(id, commentText){

  }
  $scope.getPostsRating= function(){
    //ask server for data
    //populatelist(through ng-repeat)
  }
  $scope.getPostsDate= function(){

  }
  $scope.formatDate= function(date){
    return moment(date).format('MMMM Do YYYY [at] h:mm:ss a');
  }
  $scope.toggleComment= function(topID){
    $("#topID #comments").toggle();
  }
});
$(document).ready(function(){
  angular.bootstrap(document, ['board']);
});
