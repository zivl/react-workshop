import React from 'react';

export default class TodoList extends React.Component {

  static propTypes = {
    todos: React.PropTypes.array,
    onDelete: React.PropTypes.func.isRequired,
    onComplete: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    todos: []
  }

  render() {
    var { todos, onDelete, onComplete } = this.props;

    var rows = todos.map((value, index) => {
      return (
        <li key={index}>
          <button onClick={onDelete.bind(null, value)}>X</button>
          <label className={value.selected ? 'todo-item--is-completed' : 'todo-item'}
                 onClick={onComplete.bind(null, value)}>{value.item}
          </label>

        </li>
      );
    });

    if (todos.length <= 0) {
      return (<h3>Nothing Here!</h3>);
    }

    return (
      <div>
        <ul className='todo-list'>{rows}</ul>
      </div>
    );
  }
}
