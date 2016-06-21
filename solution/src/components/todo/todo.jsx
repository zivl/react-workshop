import React, {Component} from 'react';
import TodoList from './todo-list/todo-list.jsx';
import TodoForm from './todo-form/todo-form.jsx';


export default class Todo extends Component {

	state = {
		todoItems: []
	};

	render() {

		return (
			<div className='app'>
				<TodoList
					items={this.state.todoItems}
					onDeleteClick={todoItem => this.setState({
						todoItems: this.state.todoItems.filter(todo => todo.text !== todoItem.text)
					})}
					onMarkItemAsDone={todoItem => this.toggleTodoItem(todoItem)}/>

				<TodoForm onAddButtonClick={ todoItem => this.setState({
					todoItems: this.state.todoItems.concat(todoItem)
				})}/>

				<div>{`Items: ${this.countTodoItems(this.state.todoItems)}`}</div>
			</div>
		);
	}

	toggleTodoItem(todoItem) {
		this.setState({
			todoItems: this.state.todoItems.map(todo => {
				if (todo.text === todoItem.text) {
					todo.isDone = !todo.isDone;
				}
				return todo;
			})
		});
	}

	countTodoItems(todoList) {
		let count = 0;
		todoList.forEach(todo => {
			if (todo.isDone === false) {
				count++;
			}
		});
		return count;
	}
}
