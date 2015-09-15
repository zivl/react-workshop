import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';

export default class Todo extends React.Component {

  state = {
    todos: [{
      text: 'Learn React 101',
      selected: false,
    }, {
      text: 'Learn Flux',
      selected: false,
    }]
  }

  render() {

    return (
      <div className='app'>
        <h2>{this.props.children}</h2>
        <TodoList items={this.state.todos}
                  onDelete={this._deleteTodo} />
        <TodoForm onSave={this._saveTodo} />
      </div>
    );
  }


  _deleteTodo = (todo) => {
    this.setState({
      todos: this.state.todos.filter((value) => {
        if (value !== todo) {
           return value;
         }
      })
    })
  }

  _saveTodo = (todo) => {
    this.setState({
      todos: this.state.todos.concat({
          text: todo,
          selected: false
        })
    })
  }

}
