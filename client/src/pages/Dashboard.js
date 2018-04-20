import React from "react";
import Sidebar from "../components/Sidebar.js";
import Googlemaps from "../components/Googlemaps.js";
import ProgressBar from "../components/ProgressBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IndustryForm from "../components/IndustryForm";
import LocationForm from "../components/LocationForm";
import DemographicForm from "../components/DemographicForm";
import API from "../utils/API";

class Dashboard extends React.Component {
  state = {
    open: false,
    placesResults: [],
    completed: 0,
    whichForm: "",
    industry: ""
  };
  handleClose = () => this.setState({ open: false });

  handleToggleIndustry = () => {
    this.setState({ open: !this.state.open, whichForm: "industry" });
  };

  handleToggleLocation = () => {
    this.setState({ open: !this.state.open, whichForm: "location" });
  };

  handleToggleDemographic = () => {
    this.setState({ open: !this.state.open, whichForm: "demographic" });
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
      API.sendTest({ keyword: this.state.industry })
        .then(res => {
          console.log(res.data.results);
          const resultsToState = res.data.results;
          this.setState({ placesResults: resultsToState });
        })
        .then(err => console.log(err));
    }
  };

  componentDidUpdate() {
    // console.logs state at every change
    console.log(this.state.placesResults);

  }

  formSelection = () => {
    switch (this.state.whichForm) {
      case "industry":
        return (
          <IndustryForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case "location":
        return (
          <LocationForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case "demographic":
        return (
          <DemographicForm
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
        <Sidebar
          handleToggleIndustry={this.handleToggleIndustry}
          handleToggleLocation={this.handleToggleLocation}
          handleToggleDemographic={this.handleToggleDemographic}
        />
        <div className="user-view">
          <h1 className="section-header">Profile Progress
            <MuiThemeProvider>
              <ProgressBar completed={this.state.completed} />
            </MuiThemeProvider>
          </h1>
          <Googlemaps placesResults={this.state.placesResults}/>
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
