import React from "react";
import { Container, Columns, Column } from "../components/Grid";
import IphoneMockUp from "../components/IphoneMockUp.js";
import Logo from "../components/Logo.js";
import GenericBtn from "../components/GenericBtn.js";
import AuthModal from "../components/AuthModal.js";

class Landing extends React.Component {
  state = {
    activeModal: false,
    clickedBtn: ""
  };

  toggleSignUp = () => {
    const currentState = this.state.activeModal;
    this.setState({ activeModal: !currentState, clickedBtn: "Sign Up" });
    console.log(this.state.clickedBtn);
  };

  toggleLogIn = () => {
    const currentState = this.state.activeModal;
    this.setState({ activeModal: !currentState, clickedBtn: "Login" });
  };

  render() {
    return (
      <div className="landing-cont">
        <Container size="is-fluid">
          <div className="wrapper">
            <Columns style="is-tablet is-centered">
              <Column unique="text-section">
                <Columns style="is-mobile">
                  <Column unique="blank-col" />
                  <Column size="is-narrow" unique="logo-col">
                    <Logo />
                  </Column>
                  <Column
                    size="is-6-desktop is-8-tablet is-12-mobile"
                    unique="mobile-text"
                  >
                    <Logo unique="inline-logo" />
                    <h1 className="main-title">Hot Spot</h1>
                    <p className="sub-title">Identify the low hanging fruit.</p>
                    <Columns>
                      <Column>
                        <GenericBtn toggleModal={this.toggleSignUp}>
                          Sign Up
                        </GenericBtn>
                        <GenericBtn toggleModal={this.toggleLogIn}>
                          Login
                        </GenericBtn>
                      </Column>
                    </Columns>
                  </Column>
                </Columns>
              </Column>
              <Column size="is-5" unique="phone">
                {/* <IphoneMockUp /> */}
              </Column>
            </Columns>
            <AuthModal
              activeModal={this.state.activeModal}
              clickedBtn={this.state.clickedBtn}
              toggleModal={this.toggleSignUp}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Landing;
