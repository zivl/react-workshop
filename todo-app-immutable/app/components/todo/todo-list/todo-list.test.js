import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoList from "./todo-list";

describe('todo-list', function () {

  let _component;
  let _todoList;
  let _onDelete;
  let _onComplete;
  var node, html, closeButtons;

  beforeEach(function (done) {
    _todoList = [{
      "item": "test 1",
      "selected": false
    }, {
      "item": "test 2",
      "selected": false
    }];

    _onDelete = (todo) => 'deleteClick';
    _onComplete = (todo) => 'completeClick';

    _component = TestUtils.renderIntoDocument( <TodoList todos={_todoList} onDelete={_onDelete} onComplete={_onComplete} /> );

     React.render(<TodoList todos={_todoList} onDelete={_onDelete} onComplete={_onComplete} />, document.body, function () {
      node = React.findDOMNode(this);
      html = node.innerHTML;
      closeButtons = node.querySelectorAll('li button');
      done();
    });
  });

  afterEach(function () {
    React.unmountComponentAtNode(document.body);
  });

  it('renders with two todos', function () {
    expect(_component).toExist();
    expect(_component.props.todos[0].item).toEqual('test 1');
    expect(_component.props.todos[1].item).toEqual('test 2');

    expect(!!html.match(/test 1/)).toBe(true);
    expect(!!html.match(/test 2/)).toBe(true);
  });

});
