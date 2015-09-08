<<<<<<< HEAD
import React from "react";
import TodoRow from '../todo-row/todo-row';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
    var _this = this;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {_this.props.todos.map((todo, index) =>
            <TodoRow
              todo={todo}
              key={index}
              index={index}
              editClicked={_this.props.editClicked}
              deleteClicked={_this.props.deleteClicked}
            />
          )}
        </tbody>
      </table>
=======
import React from 'react';
import {List} from 'immutable';

export default class TodoList extends React.Component {

  render() {
    var { todos, onDelete, onComplete } = this.props;

    var rows = todos.map((value, index) => {
      return (
        <li key={index}>
          <button onClick={onDelete.bind(null, index)}>X</button>
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
>>>>>>> master
    );
  }
}

TodoList.propTypes = {
<<<<<<< HEAD
  editClicked: React.PropTypes.func.isRequired,
  deleteClicked: React.PropTypes.func.isRequired
=======
  todos: React.PropTypes.instanceOf(List),
  onDelete: React.PropTypes.func.isRequired,
  onComplete: React.PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos : []
>>>>>>> master
};
