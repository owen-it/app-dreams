'use strict';

describe('Controller: LoginmodalcrglCtrl', function () {

  // load the controller's module
  beforeEach(module('appcondominioApp'));

  var LoginmodalcrglCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginmodalcrglCtrl = $controller('LoginmodalcrglCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginmodalcrglCtrl.awesomeThings.length).toBe(3);
  });
});
