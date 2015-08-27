import TodoDispatcher from '../dispatcher/todo-dispatcher';
import TodoConstants from '../constants/todo-constants';

var TodoActions = {
  addItem: function(item) {
    console.log(item);
    TodoDispatcher.handleViewAction({
      actionType: TodoConstants.ADD_ITEM,
      item: item
    })
  }
}

module.exports = TodoActions
