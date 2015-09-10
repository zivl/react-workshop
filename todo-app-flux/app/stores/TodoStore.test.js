import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoStore from './TodoStore';
import TodoActions from '../actions/ViewActionCreators';

describe('TodoStore', () => {
  let mockState = {
    todoList: [{
      item: 'Learn React',
      selected: false
    }, {
      item: 'Learn Flux',
      selected: false
    }]
  }

  beforeEach(() => {
    TodoStore.setState(mockState);
    TodoActions.loadTodos();
  });

  it('should initialize with default state', () => {
    expect(TodoStore.getState()).toEqual(mockState);
  });

  it('should create a todo item', () => {
    let todos = TodoStore.getState();
    TodoActions.saveTodo('Test todo');
    expect(todos.todoList.length).toBe(3)
    expect(todos.todoList[2]).toEqual({
      item: 'Test todo',
      selected: false
    })
  });

  it('should delete a todo item', () => {
    let todos = TodoStore.getState();
    TodoActions.deleteTodo(mockState.todoList[0]);
    expect(todos.todoList.length).toBe(1)
    expect(todos.todoList[0]).toEqual(mockState.todoList[1])
  });

  it('should complete a todo item', () => {
    let todos = TodoStore.getState();
    TodoActions.toggleTodo(todos.todoList[0]);
    expect(todos.todoList[0].selected).toBe(true);
  });
});
