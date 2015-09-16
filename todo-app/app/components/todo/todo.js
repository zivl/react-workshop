import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';

export default class Todo extends React.Component {

  static propTypes = {
    children: React.PropTypes.string,
  }

  static defaultProps = {
    children: 'My Default Todo App'
  };

  state = {};

  componentDidMount() {
    var defaultData = {
      todoList: [{
        item: 'Learn React',
        selected: false
      }, {
        item: 'Learn Flux',
        selected: false
      }]
    }
    this.setState(JSON.parse(localStorage.getItem('todo')) || defaultData);
  }

  render() {
    var { todoList } = this.state;
    var { children } = this.props;

    return (
      <div className='app'>

        <h2>{children}</h2>
        <TodoList todos={todoList}
                  onDelete={this._deleteTodo}
                  onComplete={this._completeTodo} />
        <TodoForm onSave={this._saveTodo} />
      </div>
    );
  }

  updateStorage = () => {
    localStorage.setItem('todo', JSON.stringify(this.state));
  }

  _saveTodo = (todo) => {
    var { todoList } = this.state;
    this.setState({
      todoList: todoList.concat({
        item: todo,
        selected: false
      })
    }, this.updateStorage);

  }

  _completeTodo = (completedTodo) => {
    var { todoList } = this.state;
    this.setState({
      todoList: todoList.map(todo => {
        if (completedTodo === todo) {
          todo.selected = !todo.selected;
        }
        return todo;
      })
    }, this.updateStorage);
  }

  _deleteTodo = (todo) => {
    var { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(value => {
        return value !== todo;
      })
    }, this.updateStorage);
  }
}
