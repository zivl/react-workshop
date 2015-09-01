import React from 'react';

export default class TodoHistory extends React.Component {
  constructor(props) {
    super(props);

    this.goBackward = this.goBackward.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.goBackward} type="button">&#x27f8;</button>
        <span> Todo History </span>
        <button onClick={this.goForward} type="button">&#x27f9;</button>
      </div>
    );
  }

  goBackward() {
    var { traceHistory } = this.props;
    traceHistory('backward');
  }

  goForward() {
    var { traceHistory } = this.props;
    traceHistory('forward');
  }
}
