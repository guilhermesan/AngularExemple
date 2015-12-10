'use strict';

describe('Controller: ClientFormCtrl', function () {

  // load the controller's module
  beforeEach(module('clientsApp'));

  var ClientFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientFormCtrl = $controller('ClientFormCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientFormCtrl.awesomeThings.length).toBe(3);
  });
});
