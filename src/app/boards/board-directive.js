'use strict';

angular.module('noterious')
  .directive('board', function() {
    var linker = function(scope, element, attrs) {
      $(element).hover(
        function() {
          $(this).css('opacity', '0.5');
        }, function() {
          $(this).css('opacity', '1.0');
        }
      );
    };

    return {
      link: linker,
      templateUrl: "app/boards/board.tmpl.html",
    };
  })
  ;
