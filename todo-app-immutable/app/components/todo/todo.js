import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };

    this._saveTodo = this._saveTodo.bind(this);
    this._deleteTodo = this._deleteTodo.bind(this);
    this._completeTodo = this._completeTodo.bind(this);
  }

  render() {
    var { todoList } = this.state;
    var { children } = this.props;

    return (
      <div className='app'>

        <h2>{children}</h2>
        <TodoList todos={todoList}
                  onDelete={this._deleteTodo}
                  onComplete={this._completeTodo} />
        <TodoForm todos={todoList}
                  onSave={this._saveTodo} />
      </div>
    );
  }

  _saveTodo(todo, todos) {
    this.setState({
      todoList: todos.concat({
        item: todo,
        selected: false
      })
    });
  }

  _completeTodo(completedTodo) {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (completedTodo === todo) {
          todo.selected = !todo.selected;
        }
        return todo;
      })
    });
  }

  _deleteTodo(todo, todos) {
    this.setState({
      todoList: todos.filter(value => {
        return value !== todo;
      })
    });
  }
}

Todo.propTypes = {
  children: React.PropTypes.string,
};

Todo.defaultProps = {
  children : 'My Todo App'
};
