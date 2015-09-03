var ActionTypes = require('../constants/Constants.js').ActionTypes;
var AppDispatcher = require('../dispatcher/AppDispatcher.js');


var ViewActionCreators = {
  loadTodos: () => {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TODOS
    });
  },

  toggleTodo: (todo) => {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_TOGGLED,
      todo: todo
    });
  },

  saveTodo: (todo) => {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_ADDED,
      todo: todo
    });
  },

  deleteTodo: (todo) => {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_DELETED,
      todo: todo
    });
  }
};

module.exports = ViewActionCreators;
