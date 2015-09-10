import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoForm from "./todo-form";

describe('todo-form', () => {

  let _component;
  let _onSave;
  let _todoList;

  beforeEach(() => {
    _todoList = [{
      "item": "test 1",
      "selected": false
    }, {
      "item": "test 2",
      "selected": false
    }];

    _onSave = () => 'saveClick';
    _component = TestUtils.renderIntoDocument( <TodoForm todos={_todoList} onSave={_onSave} /> );
  });

  it('renders without problems', () => {
    expect(_component).toExist();
  });

  it('renders with props', () => {
    expect(_component.props.todos).toExist();
    expect(_component.props.onSave).toExist();
  });

  it('should contain saveTodo', () => {
    expect(_component.saveTodo).toExist();
  });

  it('handleEnterKey: enter key should call saveTodo', () => {
    let spy = expect.spyOn(_component, 'saveTodo');
    let event = {
      keyCode: 13
    };
    _component.handleEnterKey(event);
    expect(spy).toHaveBeenCalled();
  });
});
