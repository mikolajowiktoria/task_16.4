import React from 'react';

const TodoList = (props) => {
	var todos = props.elements.map(function (item){
		return <li key={item.id} onClick={()=> props.remove(item.id)} > {item.text} </li>;

	})
  return <ul> {todos} </ul>;
};





export default TodoList;