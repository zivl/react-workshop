import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoList from "./todo-list";

describe('todo-list', () => {

  let _component;
  let _todoList;
  let _onDelete = (todo) => 'deleteClick';
  let _onComplete = (todo) => 'completeClick';
  let node;
  let html;

  describe('todo-list without empty todo list', () => {
    beforeEach(() => {
      _todoList = [{
        "item": "test 1",
        "selected": false
      }, {
        "item": "test 2",
        "selected": false
      }];

      _component = TestUtils.renderIntoDocument( <TodoList todos={_todoList} onDelete={_onDelete} onComplete={_onComplete} /> );
    });

    it('renders without problems', () => {
      expect(_component).toExist();
    });

    it('renders with props', () => {
      expect(_component.props.onDelete).toExist();
      expect(_component.props.onComplete).toExist();
      expect(_component.props.todos).toExist();
    });

    it('todos should have two items', () => {
      expect(_component.props.todos[0].item).toEqual('test 1');
      expect(_component.props.todos[1].item).toEqual('test 2');
    });
  });

  describe('todo-list without empty todo list', () => {

    beforeEach((done) => {
      _todoList = [];

      React.render(<TodoList todos={_todoList} onDelete={_onDelete} onComplete={_onComplete} />, document.body, function () {
        node = React.findDOMNode(this);
        html = node.innerHTML;
        done();
      });
    });

    afterEach(() => {
      React.unmountComponentAtNode(document.body);
    });

    it('should render "Nothing Here!" when no todos', () => {
      expect(html).toEqual('Nothing Here!');
    });
  });
});
