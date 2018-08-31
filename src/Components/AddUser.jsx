import React, {Component} from "react";



class AddUser extends Component {
  constructor() {
    super();
    this.state = {
        alue: "test",
        firstName:'',
        lastName:'',
        email:'',
        salary:'',
        joinDate:'',
        id: '',
    };

    this.handleAddUser = this.handleAddUser.bind(this);
    this.onChange = this.onChange.bind(this)
}

  onChange(e){
      debugger
    e.preventDefault();
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  handleAddUser() {
    let {firstName,lastName,email,salary,joinDate}=this.state;
    let userObj = {
        firstname:firstName,
        lastname:lastName,
        email:email,
        salary:salary,
        joinDate:joinDate,
        id: email
    }

    this.props.handleAddUser(userObj);
  };
  

  render() {
    return (
      <content>
        <div className="container-liquid">
          <h3 className="display-4 mb-4 text-center btn-info">
            Add An Employee
          </h3>

          <div className="col-4 form-group float-left">
            <label htmlFor="firstName"> Firstname :</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Steve"
              onChange={this.onChange}
            />
          </div>

          <div className="col-4 form-group float-left">
            <label htmlFor="lastName">Lastname :</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Austin"
              onChange={this.onChange}
            />
          </div>

          <div className="col-4 form-group float-left">
            <label htmlFor="email">E-mail :</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="something@domain.com"
              onChange={this.onChange}
            />
          </div>

          <div className="col-2 form-group float-left">
            <label htmlFor="salary">Salary :</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              placeholder="00,000.0"
              onChange={this.onChange}
            />
          </div>

          <div className="col-2 form-group float-left">
            <label htmlFor="JoinDate">Joining Date :</label>
            <input
              type="date"
              className="form-control"
              name="joinDate"
              placeholder="00,000.0"
              onChange={this.onChange}
            />
          </div>

          <button
            className="mb-4 btn btn-primary clearfix col-lg-12"
            onClick={() => this.handleAddUser()}>
            Update Employee
          </button>
        </div>
      </content>
    );
  }
}

export default AddUser;
