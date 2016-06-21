import React, {Component, PropTypes} from 'react';

export default class TodoList extends Component {

	static propType = {
		todos: PropTypes.array,
		onDeleteClick: PropTypes.func.isRequied,
		onMarkItemAsDone: PropTypes.func.isRequied
	};

	static defaultProps = {
		todos: []
	};

	render() {
		let {items: todos, onDeleteClick, onMarkItemAsDone} = this.props;

		return (
			<div className="todo-list">
				<h3>Todos</h3>
				<ul>
					{todos.map(todo =>
						<li key={todo.text}>
							<span className={`todo-item ${todo.isDone ? 'done' : ''}`} onClick={() => onMarkItemAsDone(todo)}>{todo.text}</span>
							<button onClick={() => onDeleteClick(todo)}>Delete</button>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
