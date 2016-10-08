var site="linktosite";
var app = angular.module('board' , []);
app.controller('SaintBoardCtrl',function($scope,$http){
  $scope.posts=[];
  $scope.demoServerPosts=[];
  $scope.currId=1;
  $scope.submitPost= function(postText){
    //send data to server code
    $scope.demoServerPosts.push(
  {
    "id":$scope.currId++,
    "date":moment.now(),
    "post": postText,
    "comments":[]
  });
  getData("lol");
//  console.log($scope.demoServerPosts);

    //$.post('localhost:8081',{type : "post", post : postText});
  }
  $scope.submitComment= function(postID, commentText){
    console.log(postID);
    var currpost;
    for (var i = 0; i < $scope.demoServerPosts.length; i++) {
      if ($scope.demoServerPosts[i].id == postID) {
        currpost=$scope.demoServerPosts[i];
      }
    }
    currpost.comments.push({date:moment.now(),commentText:commentText});
    console.log(currpost.comments);
    getData("lol");

    //$.post('localhost:8081',{type : "comment", comment : postText, postId : id});
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

    /*$http.get("linkToSite?rating").then(
      function success(response){
        $scope.posts=[];
      }
      function error(response){
        alerts.alert("alerts","error getting the posts, server returned: " +response.status);
      }
    )*/

  }
  $scope.formatDate= function(date){
    return moment(date).format('MMMM Do YYYY [at] h:mm:ss a');
  }
  $scope.toggleComment= function(topID){
    $("#"+topID+" .comments").toggle();
  }
});
$(document).ready(function(){
  angular.bootstrap(document, ['board']);
});
