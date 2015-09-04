import { ActionTypes } from '../constants/Constants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

class ViewActionCreators {
  loadTodos() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TODOS
    });
  }

  saveTodo(todo) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_ADDED,
      todo: todo
    });
  }

  deleteTodo(todo) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_DELETED,
      todo: todo
    });
  }

  toggleTodo(todo) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.TODO_TOGGLED,
      todo: todo
    });
  }
}

module.exports = new ViewActionCreators();
