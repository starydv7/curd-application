import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        console.log("Constructor");
        super();
        this.state = {
            count:0
        }
    }
    componentDidUpdate(lastProps,preState,snapshot) {
        console.log("update",lastProps);
    }
    render() {
        console.log("render");
    return (
        <div>
            <h1>Update { this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
      </div>
    )
  }
}
export default Message;
