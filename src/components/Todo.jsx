import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
  render() {
    return (
        <div>
            <h1>Todo</h1>
      </div>
    )
  }
}
