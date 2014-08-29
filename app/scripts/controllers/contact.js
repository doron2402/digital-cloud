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
      $scope.submitContactForm = function(contactInfo){
        console.log(contactInfo);
      };
      $scope.reset = function(){
        $scope.user = {};
      };
  });
