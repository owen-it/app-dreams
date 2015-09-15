'use strict';

describe('Service: auditing', function () {

  // load the service's module
  beforeEach(module('appcondominioApp'));

  // instantiate service
  var auditing;
  beforeEach(inject(function (_auditing_) {
    auditing = _auditing_;
  }));

  it('should do something', function () {
    expect(!!auditing).toBe(true);
  });

});
