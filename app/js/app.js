'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'GalleryCtrl'});
  $routeProvider.when('/gallery:galleryId/picture:pictureId', {templateUrl: 'partials/picture.html', controller: 'PictureCtrl'});
  
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
