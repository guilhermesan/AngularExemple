'use strict';

describe('Controller: ClienteFormCtrl', function () {

  // load the controller's module
  beforeEach(module('clientsApp'));

  var ClienteFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClienteFormCtrl = $controller('ClienteFormCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClienteFormCtrl.awesomeThings.length).toBe(3);
  });
});
