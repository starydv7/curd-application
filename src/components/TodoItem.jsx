import React, { Component } from "react";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
     
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.markComplete.bind(this, id, "a")}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            Delete
          </button>
          <button onClick={this.props.editTodo.bind(this, id)} style={btnStyle}>
            Edit Todos
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "black",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "20%",
  cursor: "pointer",
    float: "right",
  color:"red"
};
