import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoHistory from "./todo-history";

describe('todo-history', function () {

  let _component;
  let _traceHistory;

  beforeEach(function() {
    _traceHistory = () => 'traceHistory()';
    _component = TestUtils.renderIntoDocument( <TodoHistory traceHistory={_traceHistory} /> );
  });

  it('renders without problems', function () {
    expect(_component).toExist();
  });

  it('should contain _goBackward', function () {
    expect(_component._goBackward).toExist();
  });

  it('should contain _goForward', function () {
    expect(_component._goForward).toExist();
  });
});
