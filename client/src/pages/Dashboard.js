import React from "react";
import Sidebar from "../components/Sidebar.js";
import Googlemaps from "../components/Googlemaps.js";
import TargetIndustryForm from "../components/TargetIndustryForm";
import TargetLocationForm from "../components/TargetLocationForm";
import TargetDemographicsForm from "../components/TargetDemographicsForm";
import ProgressBar from "../components/ProgressBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Dashboard extends React.Component {
  state = {
    industrySearch: {}
  };
  render() {
    return (
      <div className="dashboard-cont">
        <Sidebar />
        <div className="user-view">
          <h1 className="section-header">Profile Progress</h1>
          <MuiThemeProvider>
            <ProgressBar />
          </MuiThemeProvider>
          <h1 className="section-header">Geographical Outlook</h1>
          <Googlemaps />
          <br />
          <h1 className="section-header">Statistical Outlook</h1>
          <TargetIndustryForm />
          <TargetLocationForm />
          <TargetDemographicsForm />
        </div>
      </div>
    );
  }
}

export default Dashboard;
