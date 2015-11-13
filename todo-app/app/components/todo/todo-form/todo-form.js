import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

@Radium
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
        <input {...props} onKeyDown={ this.handleEnterKey }/>
        <button style={ [
                        styles.addButton,
                        styles.highlight
                      ] } onClick={ this.saveTodo }>
          Add
        </button>
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
    var { onSave } = this.props;
    var value = newTodo.value;

    if (!value) {
      return;
    }

    newTodo.value = null;
    onSave(value);
  }
}

const styles = {
  addButton: {
    outline: 'none',
    color: '#FFFFFF',
    backgroundColor: '#ACEBC3',
    border: '2px solid #50b475'
  },
  highlight: {
    ':hover': {
      backgroundColor: '#E6EFE9'
    }
  }
};
