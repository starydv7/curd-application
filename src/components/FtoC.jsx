import React, { Component } from 'react'

 class FtoC extends Component {
  render() {
    return (
        <div>
            <Header />
            <Greeting/>
      </div>
    )
  }
}
class Header extends React.Component {
    render() {
        return (
          <Header>
            <p>Pawan,{this.props.userName}!</p>
          </Header>
        );
    }
    
}
class Greeting extends React.Component{
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeDay

        if (hours < 12) {
            timeDay = "Morining"
            
        } else if (hours >= 12 && hours < 17) {
            timeDay="AfterNoon"
            
        } else {
            timeDay="Night"
        }
        return (
            <h1>Good {timeDay } to you, sir or Madam</h1>
        )
    }
}
export default FtoC;
