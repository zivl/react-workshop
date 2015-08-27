import TodoDispatcher from '../dispatcher/todo-dispatcher';
import TodoConstants from '../constants/todo-constants';
import events from 'events';
import assign from 'object-assign';

var EventEmitter = events.EventEmitter;

var CHANGE_EVENT = 'change';
var _todos = [];

var TodoStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getAll: function() {
    return _todos;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

TodoDispatcher.register(function(payload) {
  switch(payload.action.actionType) {
    case TodoConstants.ADD_ITEM:
      var todo = payload.action.item;
      todo.id = (new Date()).getTime();
      _todos.push(todo);
      TodoStore.emitChange();
    break;
  }
  return true;
});

module.exports = TodoStore;
