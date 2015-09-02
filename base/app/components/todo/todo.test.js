import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Todo from "./todo";

describe('todo', function () {
  var _component

  beforeEach(function() {
    _component = TestUtils.renderIntoDocument( <Todo /> );
  });

  it('renders without problems', function () {
    expect(_component).toExist();
  });

  it('TODO: I will write some tests');

});
