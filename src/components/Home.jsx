import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            empData:[]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let empData = this.state.empData;
        let name = this.refs.txtName.value;
        let age = this.refs.txtAge.value;
        let role = this.refs.txtRole.value;
        let newEmployee = {
            "name": name,
            "age": age,
            "role":role
        }
        empData.push(newEmployee);
        this.setState({
            empData:empData
        })
        this.refs.myform.requestFullscreen()
    }
    render() {
        let empData = this.state.empData;
        return (
          <div>
            <form ref="myform">
              <label>Name</label>
              <input type="text" ref="txtName" placeholder="Enter Name..." />
              <br />
              <label>Age</label>
              <input type="text" ref="txtAge" placeholder="Enter Age" />
              <br />
              <label>Role</label>
              <input type="text" ref="txtRole" placeholder="Role.." />
              <br />
              <button onClick={(e) => this.handleSubmit(e)}>Save</button>
                </form>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Role</th>
                    </tr>
                    {empData.map((data, i) =>
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.role}</td>
                    </tr>)}
                </table>
          </div>
        );
  }
}
