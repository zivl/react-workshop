import React from 'react';

export default class TodoForm extends React.Component {

  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyDown} ref='newTodo' type='text' placeholder='new todos' />
        <button onClick={this.saveTodo}>Add</button>
      </div>
    );
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.saveTodo();
    }
  }

  saveTodo = () =>  {
    var value = React.findDOMNode(this.refs.newTodo).value;
    this.props.onSave(value);
    React.findDOMNode(this.refs.newTodo).value = null;
  }


}
