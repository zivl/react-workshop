import React from 'react';
import Immutable from 'Immutable';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Todo from "./todo";

describe('todo', function () {
  var mock = Immutable.fromJS([{
    "item": "test 1",
    "selected": false
  }, {
    "item": "test 2",
    "selected": false
  }]);

  let _component;

  beforeEach(function() {
    _component = TestUtils.renderIntoDocument( <Todo /> );
    _component.state.todoList = mock;
  });

  it('renders without problems', function () {
    expect(_component).toExist();
  });

  it('should contain the following functions', function () {
    expect(_component._completeTodo).toExist();
    expect(_component._deleteTodo).toExist();
    expect(_component._saveTodo).toExist();
  });

  it('_completeTodo should toggle selected todo', function () {
    _component._completeTodo(mock[0]);
    expect(_component.state.todoList[0].selected).toBe(true);
  });

  it('_saveTodo should save todo to state', function () {
    _component._saveTodo('test 3', mock);
    expect(_component.state.todoList[2].item).toBe('test 3');
    expect(_component.state.todoList[2].selected).toBe(false);
  });

  it('_deleteTodo should remove todo from state', function () {
    expect(_component.state.todoList.length).toBe(2);
    _component._deleteTodo(mock[0], mock);
    expect(_component.state.todoList.length).toBe(1);
    expect(_component.state.todoList[0].item).toBe('test 2');
  });
});
