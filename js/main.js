'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var valaddsApp = angular.module('govalueadd', ['ngSanitize','ngRoute','restangular','ui.bootstrap','autocomplete']);
  valaddsApp.config(function($routeProvider,RestangularProvider) {
      $routeProvider.
  when('/', {
      templateUrl: 'partials/home.html',
      controller: PropertiesController
      }).
      when('/properties',{
          templateUrl:'partials/properties.html',
          controller:PropertiesController
      }).
      when('/listproperties',{
          templateUrl:'partials/listings.html'
      }).
       when('/latest-properties',{
          templateUrl:'partials/latest-properties.html'
      }).
       when('/budget-properties',{
          templateUrl:'partials/budget-homes.html'
      }).
      when('/hot-properties',{
          templateUrl:'partials/hot-properties.html'
      }).
      when('/about',{
          templateUrl:'partials/about.html'
      }).
      when('/testimonials',{
          templateUrl:'partials/testimonials.html'
      }).
      when('/contact',{
          templateUrl:'partials/contact.html',
          controller:ContactFormController
      }).
      when('/property-details/:id', {
        templateUrl: 'partials/property-details.html',
          controller:PropertyDetailsController,
      resolve: {
          property: function(Restangular, $route){
            return Restangular.one('properties', $route.current.params.id).get();
          }
        } 
      }).
      otherwise({
        redirectTo: '/'
      });
      
      
     RestangularProvider.setBaseUrl('api/admin');
     RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        
        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      })
  });








