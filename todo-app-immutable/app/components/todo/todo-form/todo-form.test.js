import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoForm from "./todo-form";

describe('todo-form', function () {

  let _component;
  let _onSave;

  beforeEach(function() {
    _onSave = () => 'saveClick';
    _component = TestUtils.renderIntoDocument( <TodoForm onSave={_onSave} /> );
  });

  it('renders without problems', function () {
    expect(_component).toExist();
  });

  it('should contain _saveTodo', function () {
    expect(_component.saveTodo).toExist();
  });

});
