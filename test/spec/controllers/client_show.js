'use strict';

describe('Controller: ClientShowCtrl', function () {

  // load the controller's module
  beforeEach(module('clientsApp'));

  var ClientShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientShowCtrl = $controller('ClientShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientShowCtrl.awesomeThings.length).toBe(3);
  });
});
