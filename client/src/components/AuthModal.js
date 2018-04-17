import React, { Component } from "react";
import API from "../utils/API";

class AuthModal extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Fill out your first and last name please!");
    }
    API.userSignUp({
      email: this.state.email,
      password: this.state.password
    }).then(res=> {
      console.log(res);
      window.location.replace("/mydash");
    }).catch(err=>{
      console.log(err);
    }); 
  };

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <h1>{this.props.authtitle}</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <input
              type="submit"
              value="Sign Up"
              onClick={this.handleFormSubmit}
            />
          </form>
        </div>
        <button className="modal-close is-large" aria-label="close" />
      </div>
    );
  }
}

export default AuthModal;
