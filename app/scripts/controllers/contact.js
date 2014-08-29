'use strict';

/**
 * @ngdoc function
 * @name leads1App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the leads1App
 */
angular.module('leads1App')
  .controller('ContactCtrl', function ($scope) {
      $scope.contactForm = function(contactInfo){
        console.log(contactInfo);
      };
  });
