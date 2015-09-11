import React from 'react';

export default class TodoForm extends React.Component {

  static propTypes = {
    onSave: React.PropTypes.func.isRequired
  }

  render() {
    var props = {
      ref: 'newTodo',
      type: 'text',
      placeholder: 'New todo'
    };

    return (
      <div>
        <input {...props} onKeyDown={this.handleEnterKey}/>
        <button onClick={this.saveTodo}>Add</button>
      </div>
    );
  }

  handleEnterKey = (event) => {
    if (event.keyCode === 13) {
      this.saveTodo();
    }
  }

  saveTodo = () => {
    var { newTodo } = this.refs;
    var { onSave, todos } = this.props;
    var value = React.findDOMNode(newTodo).value;

    if (!value) {
      return;
    }

    React.findDOMNode(newTodo).value = null;
    onSave(value);
  }
}
