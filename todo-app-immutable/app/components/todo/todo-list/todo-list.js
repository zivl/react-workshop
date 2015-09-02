import React from 'react';
import {List} from 'immutable';

export default class TodoList extends React.Component {

  render() {
    var { todos, onDelete, onComplete } = this.props;

    var rows = todos.map((value, index) => {
      return (
        <li key={index}>
          <button onClick={onDelete.bind(null, index, todos)}>X</button>
          <label className={value.get('selected') ? 'todo-item-completed' : 'todo-item'}
                 onClick={onComplete.bind(null, index)}>{value.get('item')}
          </label>

        </li>
      );
    });

    if (todos.size <= 0) {
      return (<div>Nothing Here!</div>);
    }

    return (
      <div>
        <ul className='todo-list'>{rows}</ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.instanceOf(List),
  onDelete: React.PropTypes.func.isRequired,
  onComplete: React.PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos : []
};
