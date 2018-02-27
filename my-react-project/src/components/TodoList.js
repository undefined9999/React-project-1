import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'antd-mobile/lib/button';

class TodoUI extends Component {
	render() {
		return (
			<div>
				<input type="text" ref="ipt"  />
				<Button type="primary" onClick={()=>this.props.addTodo(this.refs.ipt.value)}>添加</Button>
				<ul>
				{
					this.props.todo.map(function(item, index){
						return (
							<li key={index}>{item}</li>
						);
					})
				}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state, props)=>{
	return {
		todo: state.todo_list
	}
}

const mapDispatchToProps = (dispatch, props)=>{
	return {
		addTodo: function(item) {
			dispatch({
				type: "ADD_TODO_ITEM",
				payload: item
			})
		}
	}
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoUI);

export default TodoList;