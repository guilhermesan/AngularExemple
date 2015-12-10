'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:ClientShowCtrl
 * @description
 * # ClientShowCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('ClientShowCtrl', function ($http,$scope,$routeParams) {
    $scope.client = {};
  	if ($routeParams.id){
     $http({
		    method: "GET",
		    url: 'http://localhost:3000/clients/'+$routeParams.id+'.json'
		})
		.success(function(data) {
			$scope.client = data;
		})
		. error(function(data, status, headers, config) {
			
		});
	}
  });
