import React, { Component } from "react";
// import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./Login";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      employeesList: [{
        firstname: "Milad",
        lastname: "Khan",
        email: "mildk123",
        salary: "1,000,00",
        joining : 31-8-2018,
        id: 0
      },
      {
        firstname: "Ahmed",
        lastname: "Wali",
        email: "ahmed123",
        salary: "1,000,00",
        joining : 3-8-2018,
        id: 1
      }],
      currentIndex: null,
      // employeObj : {
      //   firstname: 'firstname',
      //   lastname: 'lastname',
      //   email: 'email',
      //   salary: 'salary',
      //   joining : 'JoinDate',
      //   id: 'id'
      // }
    };
  }

  render() {
    return (
      <div>
        <content>
          <div className="container-liquid">
            <h3 className="display-4 mb-4 text-center btn-info">
              Add An Employee
            </h3>

            <div className="col-4 form-group float-left">
              <label htmlFor="firstName"> Firstname :</label>
              <input
                value={this.state.firstName}
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Steve"
                onChange={this.handleAddUser}
              />
            </div>

            <div className="col-4 form-group float-left">
              <label htmlFor="lastName">Lastname :</label>
              <input
                value={this.state.lastName}
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Austin"
                onChange={this.handleAddUser}
              />
            </div>

            <div className="col-4 form-group float-left">
              <label htmlFor="email">E-mail :</label>
              <input
                value={this.state.email}
                type="text"
                className="form-control"
                name="email"
                placeholder="something@domain.com"
                onChange={this.handleAddUser}
              />
            </div>

            <div className="col-2 form-group float-left">
              <label htmlFor="salary">Salary :</label>
              <input
                value={this.state.salary}
                type="number"
                className="form-control"
                name="salary"
                placeholder="00,000.0"
                onChange={this.handleAddUser}
              />
            </div>

            <div className="col-2 form-group float-left">
              <label htmlFor="JoinDate">Joining Date :</label>
              <input
                value={this.state.JoinDate}
                type="date"
                className="form-control"
                name="JoinDate"
                placeholder="00,000.0"
                onChange={this.handleAddUser}
              />
            </div>

            <button
              className="mb-4 btn btn-primary clearfix col-lg-12"
              onClick={this.handleAddUser}
            >
              Update Employee
            </button>
          </div>
        </content>

        <div className="list-table">
          <table className="table table-hover">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail </th>
                <th scope="col">Salary</th>
                <th scope="col">Join Date</th>
                <th scope="col">Edit Employee</th>
                <th scope="col">Remove Employee</th>
              </tr>
            </thead>
            <tbody>
                {this.state.employeesList.map((value) => {
                  return (
              <tr>
                <td key={value.firstname}>{value.firstname}</td>
                <td key={value.lastname}>{value.lastname}</td>
                <td key={value.email}>{value.email}</td>
                <td key={value.salary}>{value.salary}</td>
                <td key={value.joining}>{value.joining}</td>
                <td><button className="btn btn-info" onClick={this.editUser}>Edit Employee</button></td>
                <td><button className="btn btn-danger" onClick={this.deleteUser}>Remove</button></td>
              </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
