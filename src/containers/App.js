import React from 'react';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'
import Todo from '../components/Todo.js'
import TodoForm from '../components/TodoForm.js'
import style from './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                    id: 1,
                      text: 'clean room'
                    }, {
                    id: 2,
                        text: 'wash the dishes'
                    }, {
                    id: 3,
                        text: 'feed my cat'
                    }]	
                    	// App Initial State
         };
         this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(val){			// dodawanie elementow do kolekcji
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];	// operator spread, nowa tablica z 'todo' na koncu
        this.setState({data}); 	// == {data : data}
    }

    // nowa tablica z odfiltrowanymi elementami. Sprawdzanie czy id usuwanego elementu jest inne od sprawdzanego elementu
    removeTodo(id) {
    	const remainder = this.state.data.filter(todo => todo.id !== id);
    	this.setState({data: remainder});
    }

    render() {
    	return (
    		<div className={style.TodoApp}>		// Loader CSS style.TodoApp
    			<Title title='witaj w mojej aplikacji' opis='tutaj będzie aplikacja' />
                <TodoList elements={this.state.data} remove={this.removeTodo.bind(this)} /> 
    		</div>
    		);
    }
}

export default App;