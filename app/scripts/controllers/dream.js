'use strict';

/**
 * @ngdoc function
 * @name DreamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DreamApp
 */
angular.module('DreamApp')
    .controller('DreamCtrl', function ($scope, $rootScope, Dream, OAuth) {

        $rootScope.info = 'Hi, here are our dreams';

        // Variables
        $scope.data = {};
        $scope.page = 1;
        $scope.previous = false;
        $scope.next = false;
        $scope.isCreatingDream = false;
        $scope.dream = {
            search: ''
        };

        /* Set creating fream */
        $scope.setCreatingDream = function (flag) {
            $scope.isCreatingDream = flag;
        };

        /* Pagination */
        $scope.paginate = function (direction) {
            if (direction === 'previous')
                --$scope.page;
            else if (direction === 'next')
                ++$scope.page;
            Dream.get({page: $scope.page, search: $scope.dream.search},
                function success(response) {
                    $scope.data = response.data;
                    $scope.previous = response.prev_page_url;
                    $scope.next = response.next_page_url;
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
            );
        };

        /* Initial page */
        $scope.paginate();

        /* Edit Dream */
        $scope.edit = function (id, index) {
            $scope.errorContent = null;
            $scope.id = $scope.data[index].id;
            $scope.content = $scope.data[index].content;
            $scope.index = index;
            $('#myModal').modal();
        };

        /* Destroy Dream  */
        $scope.destroy = function (id) {
            if (confirm("Really delete this dream ?")) {
                Dream.delete({id: id},
                    function success() {
                        $scope.paginate();
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                    }
                );
            }
          };

        /* Update Dream */
        $scope.submitChange = function () {
            $scope.errorContent = null;
            Dream.update({id: $scope.id}, {content: $scope.content},
                function success(response) {
                    $scope.data[$scope.index].content = $scope.content;
                    $('#myModal').modal('hide');
                },
                function error(errorResponse) {
                    $scope.errorContent = errorResponse.data.content[0];
                }
            );
        };

        /* Create Dream */
        $scope.submitCreate = function () {
            $scope.errorCreateContent = null;
            Dream.save({}, $scope.formData,
                function success(response) {
                    $scope.setCreatingDream(false);
                    $scope.formData.content = null;
                    $scope.page = 1;
                    $scope.data = response.data;
                    $scope.previous = response.prev_page_url;
                    $scope.next = response.next_page_url;
                    window.location = '#dream';
                },
                function error(errorResponse) {
                    $scope.errorCreateContent = errorResponse.data.content[0];
                }
            );
        };

    });