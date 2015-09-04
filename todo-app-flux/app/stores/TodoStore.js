import assign from 'object-assign';
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { CHANGE_EVENT, ActionTypes } from '../constants/Constants.js';

class TodoStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      todoList: [{
        item: 'Learn React',
        selected: false
      }, {
        item: 'Learn Flux',
        selected: false
      }]
    };
    this.dispatchToken = AppDispatcher.register(this._handleAction.bind(this));
  }

  addChangeListener(fn) {
    this.addListener(CHANGE_EVENT, fn);
  }

  removeChangeListener(fn) {
    this.removeListener(CHANGE_EVENT, fn);
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = assign(this.state, newState);
    this.emit(CHANGE_EVENT);
  }

  _handleAction(payload) {
    var { action } = payload;

    switch (action.type) {
    case ActionTypes.LOAD_TODOS:
      this.setState(this.getState());
      break;

    case ActionTypes.TODO_TOGGLED:
      this.setState({
        todoList: this.state.todoList.map(todo => {
          if (action.todo === todo) {
            todo.selected = !todo.selected;
          }
          return todo;
        })
      });
      break;

    case ActionTypes.TODO_ADDED:
      this.setState({
        todoList: this.state.todoList.concat({
          item: action.todo,
          selected: false
        })
      });
      break;

    case ActionTypes.TODO_DELETED:
      this.setState({
        todoList: this.state.todoList.filter(value => {
          return value !== action.todo;
        })
      });
      break;
    }
  }
};

export default new TodoStore();
