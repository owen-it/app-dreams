'use strict';

describe('Service: dream', function () {

  // load the service's module
  beforeEach(module('appcondominioApp'));

  // instantiate service
  var dream;
  beforeEach(inject(function (_dream_) {
    dream = _dream_;
  }));

  it('should do something', function () {
    expect(!!dream).toBe(true);
  });

});
