import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import "./Dashboard.css";
import Googlemaps from "../../components/Googlemaps";
import TargetIndustryForm from '../../components/TargetIndustryForm';
import TargetLocationForm from '../../components/TargetLocationForm';
import TargetDemographicsForm from '../../components/TargetDemographicsForm';

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
          <TargetIndustryForm />
          <TargetLocationForm />
          <TargetDemographicsForm />
        </div>
      </div>
    );
  }
}

export default Dashboard;
