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
        <Columns>
          <Column>
            <Columns>
              <Column />
              <Column size="is-narrow">
                <Logo />
              </Column>
              <Column>
                <h1>Buisnes App</h1>
                <p>So that you don't have too.</p>
                <Columns>
                  <Column>
                    <GenericBtn>Sign Up</GenericBtn>
                  </Column>
                  <Column>
                    <GenericBtn>Sign In</GenericBtn>
                  </Column>
                </Columns>
              </Column>
            </Columns>
          </Column>
          <Column>
            <IphoneMockUp />
          </Column>
        </Columns>
      </Container>
    );
  }
}

export default Landing;
