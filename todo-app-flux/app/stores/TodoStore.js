var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ActionTypes = require('../constants/Constants.js').ActionTypes;

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  todoList: []
};

function setState(newState) {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
}

var TodoStore = {
  addChangeListener: function (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener: function (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState: function () {
    return state;
  }
};

TodoStore.dispatchToken = AppDispatcher.register(function (payload) {
  var { action } = payload;

  switch (action.type) {

    case ActionTypes.LOAD_TODOS:
      setState(TodoStore.getState());
      break;

    case ActionTypes.TODO_TOGGLED:
      setState({
        todoList: state.todoList.map(todo => {
          if (action.todo === todo) {
            todo.selected = !todo.selected;
          }
          return todo;
        })
      });
      break;

    case ActionTypes.TODO_ADDED:
      setState({
        todoList: state.todoList.concat({
          item: action.todo,
          selected: false
        })
      });
      break;

    case ActionTypes.TODO_DELETED:
      setState({
        todoList: state.todoList.filter(value => {
          return value !== action.todo;
        })
      });
      break;
  }
});

module.exports = TodoStore;
