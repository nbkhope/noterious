'use strict';

angular.module('noterious')
  .controller('BoardsCtrl', function (currentUser, BoardsModel) {
    var ctrl = this;

    ctrl.loading = false;

    ctrl.newBoard = {
      title: '',
      description: '',
      isPublic: false
    };

    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newBoard = {
        title: '',
        description: '',
        isPublic: false
      };
    };

    ctrl.getBoards = function () {
      // BoardsModel.all()
      //   .then(function(boards) {
      //     console.log("Successfully retrieved all boards");
      //     ctrl.boards = boards;
      //   })
      //   .catch(function(error) {
      //     console.log("Error retrieving all boards");
      //   })
      //   .finally(function() {
      //     console.log("Finished getBoards()");
      //   });
      BoardsModel.all()
        .then(function(result) {
          ctrl.boards = result;
        }, function() {
          ctrl.resetForm();
        });
    };

    ctrl.createBoard = function (board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        // CREATE BOARD
        ctrl.resetForm();
      }
    };

    ctrl.updateBoard = function (boardId, board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        // UPDATE BOARD
        ctrl.cancelEditing();
      }
    };

    ctrl.deleteBoard = function (boardId) {
      ctrl.loading = true;
      // DELETE BOARD
      ctrl.cancelEditing();
    };

    ctrl.setEditedBoard = function (boardId, board) {
      ctrl.editedBoardId = boardId;
      ctrl.editedBoard = angular.copy(board);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentBoard = function (boardId) {
      return ctrl.editedBoard !== null && ctrl.editedBoardId === boardId;
    };

    ctrl.cancelEditing = function () {
      ctrl.loading = false;
      ctrl.editedBoardId = null;
      ctrl.editedBoard = null;
      ctrl.isEditing = false;
    };

    ctrl.getBoards();
  });
