import React, { Component } from 'react'

class Life extends Component {
  
      state = {
        charData:[]
    }
    componentDidMount() {
        console.log("componentsDidMount");
        fetch("https://dummyjson.com/products/1")
            .then((res) => res.json()
                .then(data => {
                    this.setState({charData:data})
                }));
    }
  render() {
    console.log("render");
      return (
        
        <h1>{this.state.charData.name}</h1>
    )
  }
}
export default Life;
