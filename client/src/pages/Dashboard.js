import React from "react";
import Sidebar from "../components/Sidebar.js";
import Googlemaps from "../components/Googlemaps.js";
import ProgressBar from "../components/ProgressBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IndustryForm from "../components/IndustryForm";
import API from "../utils/API";

class Dashboard extends React.Component {
  state = {
    open: false,
    whichForm: "",
    industry: ""
  };
  handleClose = () => this.setState({ open: false });

  handleToggleIndustry = () => {
    this.setState({ open: !this.state.open, whichForm: "industry" });
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    if (this.state.whichForm === "industry") {
      console.log(this.state.industry);
      
    }
  };

  formSelection = () => {
    switch (this.state.whichForm) {
      case "industry":
        return (
          <IndustryForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="dashboard-cont">
        <Sidebar handleToggleIndustry={this.handleToggleIndustry} />
        <div className="user-view">
          <h1 className="section-header">Profile Progress</h1>
          <MuiThemeProvider>
            <ProgressBar />
          </MuiThemeProvider>
          <Googlemaps />
          <MuiThemeProvider>
            <Drawer
              docked={false}
              width={600}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <MenuItem onClick={this.handleClose}>CLOSE</MenuItem>
              {this.formSelection()}
            </Drawer>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default Dashboard;
