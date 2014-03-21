'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1')
  .factory('Images', function($resource) {
      return $resource ('pictures/wacken/list.json', {}, {query: {method: 'GET', isArray:true}
      });   
      
  })
  .factory('Galleries', function($resource) {
      return $resource ('pictures/galleries.json', {}, {query: {method: 'GET', isArray:true}
      });   
      
  })
;
  