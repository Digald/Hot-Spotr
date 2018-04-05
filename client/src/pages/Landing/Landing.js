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
            <Column>
              <Columns style="is-mobile">
                <Column />
                <Column size="is-narrow">
                  <Logo />
                </Column>
                <Column size="is-6">
                    <h1 className="title">Buisnes App</h1>
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
