import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';

export default class Todo extends React.Component {

  state = {
    todos: ['Learn React 101', 'Learn Flux']
  }

  render() {

    return (
      <div className='app'>
        <h2>{this.props.children}</h2>
        <TodoList items={this.state.todos} />
        <TodoForm onSave={this._saveTodo} />
      </div>
    );
  }

  _saveTodo = (todo) => {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

}
