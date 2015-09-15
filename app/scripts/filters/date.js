'use strict';

/**
 * @ngdoc filter
 * @name DreamApp.filter:date
 * @function
 * @description
 * # date
 * Filter in the DreamApp.
 */
angular.module('DreamApp')
  .filter('dateInstance', function ($filter) {
    return function (input)
    {
        if(input == null)
            return "";

        return new Date(input);

    };
  });
