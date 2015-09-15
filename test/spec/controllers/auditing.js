'use strict';

describe('Controller: AuditingctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('appcondominioApp'));

  var AuditingctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuditingctrlCtrl = $controller('AuditingctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuditingctrlCtrl.awesomeThings.length).toBe(3);
  });
});
