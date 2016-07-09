'use strict';

angular.module('noterious.common')
  .service('BoardsModel', function ($http, $q, UserModel, ENDPOINT_URI) {
    var service = this;

    service.all = function() {
      var deferred = $q.defer();

      deferred.resolve({
        1: {
          description: "Anything and everything!",
          isPublic: true,
          title: "Random Ideas"
        },
        2: {
          description: "BizDev Ideas",
          isPublic: false,
          title: "Hustle"
        },
        3: {
          description: "this is a test",
          isPublic: false,
          title: "testing"
        }
      });

      return deferred.promise;
    };

    service.fetch = function(boardId) {

    };

    service.create = function(board) {

    };

    service.update = function(board) {

    };

    service.destroy = function(boardId) {

    };


  });
