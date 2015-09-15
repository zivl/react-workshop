import React from 'react';

export default class TodoList extends React.Component {

  render() {
    var rows =  this.props.items.map((item, index) => {
      return (<li key={index}>
                <button onClick={this.props.onDelete.bind(null, item)}>X</button>
                 {item.text}
              </li>)
    });

    return (
      <ul className='todo-list'>
        {rows}
      </ul>

    );
  }


}

