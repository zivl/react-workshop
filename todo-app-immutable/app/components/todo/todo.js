import React from 'react';
import { List, Map } from 'immutable';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';
import TodoHistory from './todo-history/todo-history';

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: Map({
        todoList: List()
      })
    };

    this.history = Map({
      backward: List(),
      forward: List()
    });
    this._saveTodo = this._saveTodo.bind(this);
    this._deleteTodo = this._deleteTodo.bind(this);
    this._completeTodo = this._completeTodo.bind(this);
    this._traverseHistory = this._traverseHistory.bind(this);
    this._recordHistory = this._recordHistory.bind(this);
  }

  render() {
    var todoList = this.state.data.get('todoList');
    var { children } = this.props;

    return (
      <div className='app'>

        <h2>{children}</h2>
        <TodoHistory traverseHistory={this._traverseHistory} />
        <TodoList todos={todoList}
                  onDelete={this._deleteTodo}
                  onComplete={this._completeTodo} />
        <TodoForm todos={todoList}
                  onSave={this._saveTodo} />
      </div>
    );
  }

  _recordHistory() {
    this.history = this.history.update('backward', (historyList) =>
      historyList.push(this.state.data));
  }

  _traverseHistory(direction) {
    var { data } = this.state;
    var { history } = this;

    if(!history.get(direction).size > 0) {
      return;
    }
    var oppDirection = (direction === 'forward'? 'backward' : 'forward');

    var nextData = history.get(direction).last();

    this.history = Map({})
      .set(direction, history.get(direction).pop())
      .set(oppDirection, history.get(oppDirection).push(data));

    this.setState({
      data: nextData
    });
  }

  _saveTodo(todo, todos) {
    this._recordHistory();

    this.setState(({data}) => ({
      data: data.update('todoList', (todoList) =>
        (todoList.push(Map({
          item: todo,
          selected: false
        }))
      ))
    }))
  }

  _completeTodo(completedTodoIndex) {
    this._recordHistory();

    this.setState(({data}) => ({
      data: data.update('todoList', (todoList) =>
        todoList.map((todo, index) => {
          return (completedTodoIndex === index) ?
            todo.set('selected', !todo.get('selected')) : todo;
        }))
    }))
  }

  _deleteTodo(todoIndex, todos) {
    this._recordHistory();

    this.setState(({data}) => ({
      data: data.update('todoList', (todoList) =>
        todoList.delete(todoIndex))
    }))
  }
}

Todo.propTypes = {
  children: React.PropTypes.string,
};

Todo.defaultProps = {
  children : 'My Todo App'
};
