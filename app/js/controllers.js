'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('GalleryCtrl', ['$scope', '$routeParams', '$location', 'Images',  function($scope, $routeParams, $location, Images) {
    
    
    
    
    $scope.imageUrlList = Images.query(function() {
        var picnr=$routeParams.pictureId;
        $scope.bigImageUrl = $scope.imageUrlList[picnr].url;
    });
   
    $scope.bigImageUrl = 'pictures/wacken/01.JPG';
    $scope.changeBigImage = function (picnr) {        
        $scope.bigImageUrl = $scope.imageUrlList[picnr].url;        
        //Route.goto($scope.bigImageUrl+"ab");
        $location.path('/gallery'+picnr);  
    }
    /*$scope.$watch('foo', function(newVal){
          
        });
    */
    
  }]);