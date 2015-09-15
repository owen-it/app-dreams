'use strict';

describe('Service: logout', function () {

  // load the service's module
  beforeEach(module('appcondominioApp'));

  // instantiate service
  var logout;
  beforeEach(inject(function (_logout_) {
    logout = _logout_;
  }));

  it('should do something', function () {
    expect(!!logout).toBe(true);
  });

});
