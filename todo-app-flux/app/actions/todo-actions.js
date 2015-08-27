import TodoDispatcher from '../dispatcher/todo-dispatcher';
import TodoConstants from '../constants/todo-constants';

export default class TodoActions {

  static addItem(todo) {
    TodoDispatcher.handleViewAction({
      actionType: TodoConstants.ADD_ITEM,
      item: todo
    });
  }
}
