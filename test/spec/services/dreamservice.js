'use strict';

describe('Service: dreamService', function () {

  // load the service's module
  beforeEach(module('appcondominioApp'));

  // instantiate service
  var dreamService;
  beforeEach(inject(function (_dreamService_) {
    dreamService = _dreamService_;
  }));

  it('should do something', function () {
    expect(!!dreamService).toBe(true);
  });

});
