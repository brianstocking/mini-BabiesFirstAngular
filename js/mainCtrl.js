var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
  
  $scope.friends = ['Dan','maja','madi']


  $scope.addFriend = function(){
    $scope.friends.push($scope.newFriend);

};
});