import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from './AddUser'
// import swal from "sweetalert";


class Dashboard extends Component {
  
  constructor() {
    super();
    this.state = {
      employeesList: [ ]
    };
    this.handleAddUser = this.handleAddUser.bind(this)
  }



    editingUser = function(){
      console.log(`Editing`);
    }
    
    RemovingUser = function(){
      console.log(`Deleting`);
      this.set
    }
    handleAddUser(user) {
      this.setState({
        employeesList:[
          ...this.state.employeesList,
          user,
        ]
      })
      console.log(this.setState)
    };
  render() { 
    return (
      <div>
        <AddUser employeesList={this.state.employeesList} handleAddUser={this.handleAddUser} />        

        <div className="list-table">
          <table className="table table-hover">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail </th>
                <th scope="col">Salary/Week</th>
                <th scope="col">Join Date</th>
                <th scope="col">Edit Employee</th>
                <th scope="col">Remove Employee</th>
              </tr>
            </thead>
            <tbody>
              { 
                this.state.employeesList.map(value => {
                return (
                  <tr>
                    <td key={value.firstname}>{value.firstname}</td>
                    <td key={value.lastname}>{value.lastname}</td>
                    <td key={value.email}>{value.email}</td>
                    <td key={value.salary}>
                      Rs/
                      {value.salary}
                    </td>
                    <td key={value.joinDate}>{value.joinDate}</td>
                    <td><button className="btn btn-info" onClick={this.editingUser.bind(this)}>Edit Employee</button></td>
                    <td><button className="btn btn-danger"onClick={this.RemovingUser.bind(this)} value={value.id}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }


  };


export default Dashboard;
