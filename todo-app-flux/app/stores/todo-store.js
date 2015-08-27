import TodoDispatcher from '../dispatcher/todo-dispatcher';
import TodoConstants from '../constants/todo-constants';
import events from 'events';
import assign from 'object-assign';

console.log('store');
var EventEmitter = events.EventEmitter;

var CHANGE_EVENT = 'change';

var TodoStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    console.log('emit');
    this.emit(CHANGE_EVENT);
  }
});

console.log(TodoDispatcher);
TodoDispatcher.register(function(payload) {
  console.log('payload', payload);
  return true;
});

module.exports = TodoStore;
