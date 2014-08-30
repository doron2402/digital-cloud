'use strict';

/**
 * @ngdoc function
 * @name leads1App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the leads1App
 */
angular.module('leads1App')
  .controller('ContactCtrl', function ($scope, $http) {
      $scope.submitContactForm = function(contactInfo){
        if (!contactInfo || !contactInfo.email || !contactInfo.fname) {
            window.alert('Give us something to work with...');
        } else {
            $http({
              method: 'POST',
              url: 'http://localhost:9987/api/site/contactus',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
              data: contactInfo}
              ).success(function(data, status, headers, config) {
                console.log(data);
              }).error(function(data, status, headers, config) {
                console.log(data);
                console.log(status);
              });
            console.log(contactInfo);
        }
      };
      $scope.reset = function(){
        $scope.user = {};
      };
  });
