<<<<<<< HEAD
import React from "react";

export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.cancelClick = this.cancelClick.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event);
  }

  saveClick (event) {
    if(this.props.todo.get('name') && this.props.todo.get('name').length > 0) {
      this.props.onSave(this.props.todo);
    } else {
      alert('Please enter todo!!');
    }
  }

  cancelClick (event) {
    this.props.cancelClick();
  }

  render() {
    return (
      <div className='row'>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            placeholder='Todo'
            value={this.props.todo.get('name')}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-sm-4 pull-right">
          <button
            className='btn btn-success btn-sm'
            onClick={this.saveClick}>Save
          </button>

          &nbsp;&nbsp;

          <button
            className='btn btn-danger btn-sm'
            onClick={this.cancelClick}>Cancel
          </button>

          &nbsp;&nbsp;

          <button
            className='btn btn-default btn-sm'
            onClick={this.props.handleUndo}> &#x21a9; Undo
          </button>

          &nbsp;&nbsp;

          <button
            className='btn btn-default btn-sm'
            onClick={this.props.handleRedo}>Redo &#x21aa;
          </button>
        </div>
      </div>
    );
=======
import React from 'react';

export default class TodoForm extends React.Component {

  render() {
    var props = {
      ref: 'newTodo',
      type: 'text',
      placeholder: 'New todo'
    };

    return (
      <div>
        <input {...props}
               onKeyDown={(event) => {
                 if (event.keyCode === 13) {
                   this.saveTodo();
                 }
               }}/>
        <button onClick={this.saveTodo.bind(this)}>Add</button>
      </div>
    );
  }

  saveTodo() {
    var { newTodo } = this.refs;
    var { onSave } = this.props;
    var value = React.findDOMNode(newTodo).value;

    if (!value) {
      return;
    }

    React.findDOMNode(newTodo).value = null;
    onSave(value);
>>>>>>> master
  }
}

TodoForm.propTypes = {
<<<<<<< HEAD
  todo: React.PropTypes.object,
  cancelClick: React.PropTypes.func.isRequired,
=======
  onSave: React.PropTypes.func.isRequired
>>>>>>> master
};
