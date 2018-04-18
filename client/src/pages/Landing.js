import React from "react";
import { Container, Columns, Column } from "../components/grid";
// import IphoneMockUp from "../components/IphoneMockUp.js";
import Logo from "../components/Logo.js";
import GenericBtn from "../components/GenericBtn.js";
import SocialMedia from '../components/SocialMedia.js';
import Footer from '../components/Footer.js';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-cont">
        <Container size="is-fluid">
          <SocialMedia socialClass="landing-social" />
          <div className="wrapper">
            <Columns>
              <Column unique="text-section">
                <Columns>
                  <Column unique="blank-col" />
                  <Column size="is-narrow" unique="logo-col">
                    <Logo />
                  </Column>
                  <Column
                    size="is-6-desktop is-8-tablet is-12-mobile"
                    unique="mobile-text"
                  >
                    <Logo unique="inline-logo" />
                    <h1 className="main-title">Hot Spotr</h1>
                    <p className="sub-title">Identify the low hanging fruit.</p>
                    <Columns>
                      <Column>
                        <GenericBtn buttonClass="sign-in-button">Sign In</GenericBtn>
                        <GenericBtn buttonClass="sign-up-button">Sign Up</GenericBtn>
                      </Column>
                    </Columns>
                  </Column>
                </Columns>
              </Column>
              <Column size="is-5" unique="phone">
              </Column>
            </Columns>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Landing;
