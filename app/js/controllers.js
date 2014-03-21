'use strict';

/* Controllers */

function generateLastLink(actualPicNr, totalPicNr) {
    
}

angular.module('myApp.controllers', ['ngResource'])
  .controller('GalleryCtrl', ['$scope', '$routeParams', '$location', 'Images',  function($scope, $routeParams, $location, Images) {
    alert('gallery controller not used at the moment');
          /*       
    $scope.imageUrlList = Images.query(function() {
        var picnr=$routeParams.pictureId;
        $scope.bigImageUrl = $scope.imageUrlList[picnr].url;
    
   
    //$scope.bigImageUrl = 'pictures/wacken/01.JPG';
    $scope.changeBigImage = function (picnr) {        
        $scope.bigImageUrl = $scope.imageUrlList[picnr].url;        
        $location.path('/gallery'+picnr);  
    }
        
    var picnr  =$routeParams.pictureId;
    var numberOfPics = 7;    
    $scope.lastLink = '/index';    
    $scope.nextLink = '/index';
    if ((+picnr) > 0) {
        $scope.lastLink = '/gallery'+(+picnr-1);
    }
    if((+picnr+1) > numberOfPics) {
        $scope.nextLink = '/gallery'+(+picnr+1);
    }
    
    
    });
    */
  }])
 .controller('PictureCtrl', ['$scope', '$routeParams', '$location', 'Images', 'Galleries', '$resource',  function($scope, $routeParams, $location, Images, Galleries, $resource) { 
   
   var galleryId = $routeParams.galleryId;
   
   $scope.galleryList = Galleries.query(function() { 
       $scope.galleryUrl = $scope.galleryList[galleryId].listUrl;
       
        var imagesUrlResource = $resource ($scope.galleryUrl, {}, {query: {method: 'GET', isArray:true}});   
        $scope.imageUrlList = imagesUrlResource.query(function() {
        //$scope.imageUrlList = Images.query(function() {

             var picnr = $routeParams.pictureId;
             //todo add exception for not found
             $scope.bigImageUrl = $scope.imageUrlList[picnr].url;
             var numberOfPics = $scope.imageUrlList.valueOf().length;

             var picnr = $routeParams.pictureId;

             $scope.galleryId = galleryId;



             //alternative own functions, directives,service
             $scope.lastLink = '/index';   
             $scope.nextLink = '/index';
             if((picnr) > 0) {
                 $scope.lastLink = '/gallery'+galleryId+'/picture'+(+picnr-1);
             }
             if((+picnr+1) < numberOfPics) {        
                 $scope.nextLink = '/gallery'+galleryId+'/picture'+(+picnr+1);
             }    
        });
     });
    
  }])
  .controller('ListCtrl',  ['$scope',  function($scope) { 
   //todo move to service
   $scope.galleryList = [
           {
             "file": "pictures/seehundstation/list.json",
             "name": "Seehundstation Friedrichskoog"
            },
           {
             "folder": "pictures/wacken/list.json",
             "name": "Wacken Open Air 2013"
           }
         ];
      
  }]);
  
;