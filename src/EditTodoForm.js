import React, { Component } from "react";

export default class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      isShowing: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.task !== prevState.task) {
      return {
        task: nextProps.task
      };
    }
    return null;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editTodo(this.state);
    this.setState({
      isShowing: false
    });
  };

  toggleEdit = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };

  render() {
    return this.state.isShowing ? (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="task"
            value={this.state.task}
          />
          <button>Edit</button>
        </form>
      </div>
    ) : (
      <button onClick={this.toggleEdit}>Edit</button>
    );
  }
}
