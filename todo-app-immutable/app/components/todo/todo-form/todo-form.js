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
    if(this.props.todo.name && this.props.todo.name.length > 0) {
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
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            placeholder='Todo'
            value={this.props.todo.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-sm-3 pull-right">
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
            onClick={this.props.handleUndo}>UNDO
          </button>
        </div>
      </div>
    );
  }
}

TodoForm.propTypes = {
  todo: React.PropTypes.object,
  cancelClick: React.PropTypes.func.isRequired,
};
