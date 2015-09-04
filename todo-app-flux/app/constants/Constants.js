import keyMirror from 'react/lib/keyMirror';

module.exports = {

  CHANGE_EVENT: 'CHANGE',

  ActionTypes: keyMirror({
    LOAD_TODOS: null,
    TODO_ADDED: null,
    TODO_DELETED: null,
    TODO_TOGGLED: null
  })

};
