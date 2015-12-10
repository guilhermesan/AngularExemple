'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('ClientsCtrl', function ($http,$scope) {
    $scope.clients = [];

    $http({
		    method: "GET",
		    url: 'http://localhost:3000/clients.json'
		})
		.success(function(data) {
			$scope.clients = data;
		})
		. error(function(data, status, headers, config) {
			
		});

	$scope.delete = function(client){
		$http({
		    method: "DELETE",
		    url: 'http://localhost:3000/clients/'+client.id+'.json'
		})
		.success(function(data) {
			$scope.removeFromArray($scope.clients,client)
		})
		. error(function(data, status, headers, config) {
			
		});

	}	

	$scope.removeFromArray = function remove(arr, item) {
      for(var i = arr.length; i--;) {
          if(arr[i] === item) {
              arr.splice(i, 1);
          }
      }
  	}

	

  });

