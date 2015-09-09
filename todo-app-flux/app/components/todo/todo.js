import React from 'react';
import TodoList from './todo-list/todo-list';
import TodoForm from './todo-form/todo-form';
import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/ViewActionCreators';

export default class Todo extends React.Component {

  static propTypes = {
    children: React.PropTypes.string
  }

  static defaultProps = {
    children : 'My Todo App'
  }

  state = {
    todoList: [{
      item: 'Learn React',
      selected: false
    }, {
      item: 'Learn Flux',
      selected: false
    }]
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.handleStoreChange);
    TodoActions.loadTodos();
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState(TodoStore.getState());
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
        <TodoForm todos={todoList}
                  onSave={this._saveTodo} />
      </div>
    );
  }

  _saveTodo = (todo) => {
    TodoActions.saveTodo(todo);
  }

  _completeTodo = (todo) => {
    TodoActions.toggleTodo(todo);
  }

  _deleteTodo = (todo) => {
    TodoActions.deleteTodo(todo);
  }
}
