var site="linttosite";
var app = angular.module('board' , []);
app.controller('SaintBoardCtrl',function($scope,$http){
  $scope.posts=[];
  $scope.submitPost= function(postText){
    //send data to server code
    $.post('localhost:8081',{type : "post", post : postText})
  }
  $scope.submitComment= function(id, commentText){
    $.post('localhost:8081',{type : "comment", comment : postText, postId : id})
  }
  $scope.getPostsRating= function(){
    getData(site+"?rating");
    //ask server for data
    //populatelist(through ng-repeat)
  }
  $scope.getPostsDate= function(){
    getData(site+"?date");

  }
  getData=function(requestsite){

    $http.get("linkToSite?rating").then(
      function success(response){

      }
      //function console.error();
    )
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
