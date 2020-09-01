import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
 {
   task: 'Organize Garage',
   id: 1528817077286,
   completed: false
 },
 {
   task: 'Bake Cookies',
   id: 1528817084358,
   completed: false
 }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo=>!todo.completed)
    })
  }

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
