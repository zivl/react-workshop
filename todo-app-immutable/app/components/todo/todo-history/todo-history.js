import React from 'react';

export default class TodoHistory extends React.Component {
  constructor(props) {
    super(props);

    this._goBackward = this._goBackward.bind(this);
    this._goForward = this._goForward.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this._goBackward} type="button">&#x27f8;</button>
        <span> Todo History </span>
        <button onClick={this._goForward} type="button">&#x27f9;</button>
      </div>
    );
  }

  _goBackward() {
    var { traverseHistory } = this.props;
    traverseHistory('backward');
  }

  _goForward() {
    var { traverseHistory } = this.props;
    traverseHistory('forward');
  }
}

TodoHistory.propTypes = {
  traverseHistory: React.PropTypes.func.isRequired,
};
