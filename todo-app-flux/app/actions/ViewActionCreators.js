var ActionTypes = require('../constants/Constants.js').ActionTypes;
var AppDispatcher = require('../dispatcher/AppDispatcher.js');


var ViewActionCreators = {
  loadTodos: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TODOS
    });
  },

  toggleTodo: function (todo) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_TOGGLED,
      todo: todo
    });
  },

  saveTodo: function (todo) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_ADDED,
      todo: todo
    });
  },

  deleteTodo: function (todo) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_DELETED,
      todo: todo
    });
  }
};

module.exports = ViewActionCreators;
