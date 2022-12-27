import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            title:"My React App",
            act:0,
            empData: [],
            index:""
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
    handleDelete = (i) => {
        let empData = this.state.empData;
        empData.splice(i, 1);
        this.setState({
            empData: empData
        });
    }
    // handleEdit = (i) => {
    //     let empData = this.state.empData;
    //     empData.
    // }
    handleEdit = (i) => {
        let empData = this.state.empData[i];
        this.refs.txtName.value = empData.name;
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
                        <th>Delete</th>
              </tr>
              {empData.map((data, i) => (
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.role}</td>
                  <td>
                    <button onClick={this.handleDelete(i)}></button>Delete
                  </td>
                  <td>
                    <button onClick={this.handleEdit(i)}></button>Edit
                  </td>
                </tr>
              ))}
            </table>
          </div>
        );
  }
}
