var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    LOAD_TODOS: null,
    TODO_ADDED: null,
    TODO_DELETED: null,
    TODO_TOGGLED: null
  })

};
