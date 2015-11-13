import React from 'react';

// export default class TodoList extends React.Component {
const TodoList = ({ todos, onDelete, onComplete }) => {

  // Property types
  //   todos: array,
  //   onDelete: function,
  //   onComplete: function,

  var rows = todos.map((value, index) => {
    return (
      <li key={ index }>
        <button onClick={ onDelete.bind(null, value, todos) }>X</button>
        <label className={ value.selected ? 'todo-item--is-completed' : 'todo-item' }
                onClick={ onComplete.bind(null, value) }>{ value.item }
        </label>

      </li>
    );
  });

  if (todos.length <= 0) {
    return (<h3>Nothing Here!</h3>);
  }

  return (
    <div>
      <ul className='todo-list'>{ rows }</ul>
    </div>
  );
}

export default TodoList;
