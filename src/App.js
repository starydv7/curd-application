import React, { Component } from 'react';
import Todos from './components/Todos';

import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css'
import Welcome from './components/Welcome';
import Fetch from './components/Fetch';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Pawan Yadav',
        completed: false,
      },
      {
        id: 2,
        title: 'Lunch',
        completed: true,
      },
      {
        id: 3,
        title: 'Shopping',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
    editTodo(id, newText) {
    this.setState((state) => {
      const todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todos, text: newText };
        }
        return todo;
      });
      return { todos };
    });
  }

  addTodo = (title) => {

    // const length = 32;

    const newTodo = {
      
      title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
     
      <div className='App'>
        <Welcome />
        <Fetch/>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
          delTodo={this.delTodo}
          editTodo={this.editTodo}
          />
        {/* </div> */}
      </div>
    );
  }
}