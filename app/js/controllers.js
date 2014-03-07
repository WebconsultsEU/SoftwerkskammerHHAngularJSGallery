'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('ImageCtrl', ['$scope', 'Images', function($scope, Images) {
    $scope.bigImageUrl = 'pictures/wacken/01.JPG';
    $scope.imageUrlList = Images.query();
    /* $scope.imageUrlList = ['pictures/wacken/01.JPG',
                        'pictures/wacken/02.JPG',
                        'pictures/wacken/03.JPG',
                        'pictures/wacken/04.JPG',
                        'pictures/wacken/05.JPG',
                        'pictures/wacken/06.JPG',
                        'pictures/wacken/07.JPG',
                        'pictures/wacken/08.JPG'
                       
                       
    ];*/
          
    $scope.changeBigImage = function (url) {
        $scope.bigImageUrl = url;
    }
    
    
  }]);