import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Eat", "Sleep", "Go Home"]
    };
    // this.addTodo = this.addTodo.bind(this) // OLDER METHOD BINDING
  }
  //   addTodo() {} // OLDER CLASS METHOD

  addTodo = () => {}; // keyword this refers to the component

  addTodo = todo => {
    this.setState({
      todos: this.state.todos.concat(todo.task)
    });
  };

  editTodo = (i, todo) => {
    let todos = this.state.todos.map(function(val, idx) {
      if (i === idx) {
        val = todo.task;
      }
      return val;
    });
    this.setState({ todos });
  };

  removeTodo = i => {
    let todos = this.state.todos.filter((v, idx) => idx !== i);
    this.setState({ todos });
  };

  render() {
    let todos = this.state.todos.map((v, i) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, i)}
        editTodo={this.editTodo.bind(this, i)}
        task={v}
        key={i}
      />
    ));
    return (
      <ul>
        <NewTodoForm addTodo={this.addTodo} />
        <br />
        {todos}
      </ul>
    );
  }
}
