import React, { Component } from "react";

class AuthModal extends Component {
  state = {
    emailvalue: "",
    passvalue: ""
  };
  
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e) {
    alert(this.state.emailvalue + this.state.passvalue);
  }
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
                value={this.state.emailvalue}
                onChange={this.handleEmailChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={this.state.passvalue}
                onChange={this.handlePassChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <button className="modal-close is-large" aria-label="close" />
      </div>
    );
  }
}

export default AuthModal;
