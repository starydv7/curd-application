import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
    reset() {
        this.setState((preValue) => ({
            count:0
        }))
    }

  increment() {
    this.setState((preValue) => ({
      count: preValue.count + 1,
    }));
  }

  decrement() {
    this.setState((preValue) => ({
      count: preValue.count - 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
