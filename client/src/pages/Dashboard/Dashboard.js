import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import "./Dashboard.css";
import Googlemaps from "../../components/Googlemaps";
import TargetIndustry from '../../components/TargetIndustry';
import TargetLocation from '../../components/TargetLocation';
import TargetDemographics from '../../components/TargetDemographics';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-cont">
        <Sidebar />
        <div className="user-view">
          <h1 className="section-header">Profile Completeness</h1>
          <h1 className="section-header">Geographical Outlook</h1>
          <Googlemaps />
          <br /><h1 className="section-header">Statistical Outlook</h1>
          <TargetIndustry />
          <TargetLocation />
          <TargetDemographics />
        </div>
      </div>
    );
  }
}

export default Dashboard;
