import keyMirror from 'react/lib/keyMirror';

export const CHANGE_EVENT = 'CHANGE';

export const ActionTypes = keyMirror({
  LOAD_TODOS: null,
  TODO_ADDED: null,
  TODO_DELETED: null,
  TODO_TOGGLED: null
});
