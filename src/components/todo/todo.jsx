import React, {Component} from 'react';
import TodoList from './todo-list/todo-list.jsx';
import TodoForm from './todo-form/todo-form.jsx';

export default class Todo extends Component {

  render() {

    return (
      <div className='app'>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}
