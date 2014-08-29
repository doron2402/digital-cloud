'use strict';

/**
 * @ngdoc function
 * @name leads1App.controller:TopMenuCtrl
 * @description
 * # TopMenuCtrl
 * Controller of the leads1App
 */
angular.module('leads1App')
  .controller('TopMenuCtrl', function ($scope, $location) {
      $scope.isActive = function(link){
        var currentRoute = $location.path().substring(1) || 'home';
        return link === currentRoute ? 'active' : '';
      };

      $scope.navLinks = [{title: 'Home', link: 'home'}, {title: 'About', link: 'about'}, {title: 'Contact', link: 'contact'}];
  });
