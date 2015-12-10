'use strict';

/**
 * @ngdoc function
 * @name clientsApp.controller:ClientFormCtrl
 * @description
 * # ClientFormCtrl
 * Controller of the clientsApp
 */
angular.module('clientsApp')
  .controller('ClientFormCtrl', function ($routeParams,$http,$scope,$location) {

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

	$scope.save = function(client){
		var url = 'http://localhost:3000/clients'+($routeParams.id ? ("/"+$routeParams.id) : '') +'.json';
		var method = $routeParams.id ? "PUT" : "POST";
		$http({
		    method: method,
		    url: url,
		    data: client
		})
		.success(function(data) {
			$location.path('/clients/'+data.id+'/show')
			$scope.client = data;
		})
		. error(function(data, status, headers, config) {
			
		});
	}
  });
