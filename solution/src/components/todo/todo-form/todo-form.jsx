import React, {Component, PropTypes} from 'react';

export default class TodoForm extends Component {

	static propTypes = {
		onAddButtonClick: PropTypes.func.isRequired
	};

	render() {
		let {onAddButtonClick} = this.props;
		return (
			<div>
				<input type="text" ref="todoInput"/>
				<button onClick={()=>{
					let todoValue = this.refs.todoInput.value;
					this.refs.todoInput.value = '';
					onAddButtonClick({text: todoValue, isDone:false});
				}}>Add
				</button>
			</div>
		);
	}
}
