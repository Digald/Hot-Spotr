import React, { Component } from "react";
import "./Landing.css";
import { Container, Columns, Column } from "../../components/Grid";
import IphoneMockUp from "../../components/IphoneMockUp";
import Logo from "../../components/Logo";
import GenericBtn from "../../components/Buttons";

class Landing extends Component {
  render() {
    return (
      <Container size="is-fluid">
        <div className="wrapper">
          <Columns style="is-tablet is-centered">
            <Column unique="text-section">
              <Columns style="is-mobile">
                <Column unique="blank-col"/>
                <Column size="is-narrow" unique="logo-col">
                  <Logo />
                </Column>
                <Column size="is-6-desktop is-8-tablet is-12-mobile" unique="mobile-text">
                  <Logo unique="inline-logo"/>
                  <h1 className="main-title">Buisnes App</h1>
                  <p className="sub-title">So that you don't have too.</p>
                  <Columns>
                    <Column>
                      <GenericBtn>Sign In</GenericBtn>
                    </Column>
                  </Columns>
                </Column>
              </Columns>
            </Column>
            <Column size="is-5" unique="phone">
              <IphoneMockUp />
            </Column>
          </Columns>
        </div>
      </Container>
    );
  }
}

export default Landing;
