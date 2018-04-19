import React from "react";
import { Container, Columns, Column } from "../components/Grid";
// import IphoneMockUp from "../components/IphoneMockUp.js";
import Logo from "../components/Logo.js";
import GenericBtn from "../components/GenericBtn.js";
import SocialMedia from '../components/SocialMedia.js';
import Footer from '../components/Footer.js';
import Census from "../components/Census_Test/Census";

class Landing extends React.Component {

  componentDidMount(){Census.getCensusEarnings2224().then(
    res=>{
      console.log(res);
    }
  ).catch(
    err=>{
      console.log(err);
    }
  )};



  render() {
    return (
      <div className="landing-cont">
        <Container size="is-fluid">
          <SocialMedia socialClass="landing-social" />
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
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Landing;
