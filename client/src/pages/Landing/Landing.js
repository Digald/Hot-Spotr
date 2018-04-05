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
          <Columns>
            <Column>
              <Columns>
                <Column />
                <Column size="is-narrow">
                  <Logo />
                </Column>
                <Column>
                  <h1 className="title">Buisnes App</h1>
                  <p className="sub-title">So that you don't have too.</p>
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
        </div>
      </Container>
    );
  }
}

export default Landing;
