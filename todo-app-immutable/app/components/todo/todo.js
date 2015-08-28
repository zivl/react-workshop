'use strict';

import React from "react";
import {Map, List} from "immutable";
import TodoList from "./todo-list/todo-list";
import TodoForm from "./todo-form/todo-form";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: Map({
        todo: Map({}),
        todoList: List(),
        selectedIndex: -1
      })
    };

    this.saveTodo = this.saveTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.cancelClick = this.cancelClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  cancelClick() {
    //console.log('before click ', this.state.data.toJS());
    this.setState((previousState) => ({
      data: previousState.data.merge({
        selectedIndex: -1,
        todo: {}
      })
    }));

    console.log('cancel');
    //console.log('after click ', this.state.data.toJS());
  }

  isTodoItemSelectedToEdit(todo) {
    return (this.state.data.get('selectedIndex') !== -1);
  }

  saveTodo(todo) {
    if(this.isTodoItemSelectedToEdit(todo)) {
      this.setState((previousState) => ({
        data: previousState.data.update('todoList', (list =>
          list.set(previousState.data.get('selectedIndex'), todo)))
      }));
    } else {
      this.setState((previousState) => ({
        data: previousState.data.update('todoList', (list =>
          list.push(todo)))
      }));
    }

    setTimeout(this.refs.todoForm.cancelClick);
  }

  editTodo(index) {
    console.log('before edit', this.state.data.toJS());
    this.setState(function(previousState) {
      let editingTodoName = previousState.data.get('todoList').get(index).name;
      return {
        data: previousState.data.merge({
          todo: previousState.data.get('todo').set('name', editingTodoName),
          selectedIndex: index
        })
      };

    });

    console.log('after edit', this.state.data.toJS());
  }

  handleChange(event) {
    let todoEntry = event.target.value;

    this.setState((previousState) => ({
      data: previousState.data.update('todo', (todo) =>
        todo.set('name', todoEntry))
    }));
  }

  deleteTodo(index) {
    this.setState((previousState) => ({
      data: previousState.data.update('todoList', function(todoList) {
        return todoList.delete(index);
      })
    }));
  }

  render() {
    return (
      <div>
        <TodoForm
          ref='todoForm'
          todo={this.state.data.get('todo').toJS()}
          onSave={this.saveTodo}
          cancelClick={this.cancelClick}
          handleChange={this.handleChange}
        />
        <hr/>
        <TodoList
          todos={this.state.data.get('todoList')}
          editClicked={this.editTodo}
          deleteClicked={this.deleteTodo}
        />
      </div>
    );
  }
}
