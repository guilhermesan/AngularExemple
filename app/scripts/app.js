'use strict';

/**
 * @ngdoc overview
 * @name clientsApp
 * @description
 * # clientsApp
 *
 * Main module of the application.
 */
angular
  .module('clientsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl',
        controllerAs: 'clients'
      })
      .when('/clients/new', {
        templateUrl: 'views/client_form.html',
        controller: 'ClientFormCtrl',
        controllerAs: 'clientForm'
      })
      .when('/clients/:id/edit', {
        templateUrl: 'views/client_form.html',
        controller: 'ClientFormCtrl',
        controllerAs: 'clientForm'
      })
      .when('/clients/:id/show', {
        templateUrl: 'views/client_show.html',
        controller: 'ClientShowCtrl',
        controllerAs: 'clientShow'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
