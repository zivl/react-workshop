import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Todo from "./todo";

describe('todo', () => {
  let mockState = {
    todoList: [{
      "item": "test 1",
      "selected": false
    }, {
      "item": "test 2",
      "selected": false
    }]
  };

  let _component;

  beforeEach(() => {
    _component = TestUtils.renderIntoDocument( <Todo /> );
    _component.setState(mockState);
  });

  it('renders without problems', () => {
    expect(_component).toExist();
  });

  it('should contain the following functions', () => {
    expect(_component._completeTodo).toExist();
    expect(_component._deleteTodo).toExist();
    expect(_component._saveTodo).toExist();
  });

  it('_completeTodo: should toggle selected todo', () => {
    _component._completeTodo(mockState.todoList[0]);
    expect(_component.state.todoList[0].selected).toBe(true);
  });

  it('_saveTodo: should save todo to state', () => {
    _component._saveTodo('test 3');
    expect(_component.state.todoList[2].item).toBe('test 3');
    expect(_component.state.todoList[2].selected).toBe(false);
  });

  it('_deleteTodo: should remove todo from state', () => {
    expect(_component.state.todoList.length).toBe(2);
    _component._deleteTodo(mockState.todoList[0]);
    expect(_component.state.todoList.length).toBe(1);
    expect(_component.state.todoList[0].item).toBe('test 2');
  });
});
