import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuidv4";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "Eat", id: uuid() },
        { task: "Sleep", id: uuid() },
        { task: "Go Home", id: uuid() }
      ]
    };
  }

  addTodo = todo => {
    this.setState({
      todos: this.state.todos.concat([{ task: todo.task, id: uuid() }])
    });
  };

  editTodo = (i, todo) => {
    let todos = this.state.todos.map(val => {
      if (val.id === i) {
        val.task = todo.task;
      }
      return val;
    });
    this.setState({ todos });
  };

  removeTodo = i => {
    let todos = this.state.todos.filter(v => v.id !== i);
    this.setState({ todos });
  };

  render() {
    let todos = this.state.todos.map(v => (
      <Todo
        removeTodo={this.removeTodo.bind(this, v.id)}
        editTodo={this.editTodo.bind(this, v.id)}
        task={v.task}
        key={v.id}
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
