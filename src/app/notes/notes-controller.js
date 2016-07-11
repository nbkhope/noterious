'use strict';

angular.module('noterious')
  .controller('NotesCtrl', function (currentUser, NotesModel) {
    var ctrl = this;

    // ctrl.getNotes = function() {
    //   NotesModel.all()
    //     .then(function(result) {
    //       ctrl.notes = (result !== 'null') ? result : {};
    //     });
    // };
    //
    // ctrl.getNotes();
    ctrl.title = "MY NOTES!!";
  })
  ;
