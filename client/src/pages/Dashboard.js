import React from "react";
import Sidebar from "../components/Sidebar.js";
import Googlemaps from "../components/Googlemaps.js";
import TargetIndustryForm from '../components/TargetIndustryForm';
import TargetLocationForm from '../components/TargetLocationForm';
import TargetDemographicsForm from '../components/TargetDemographicsForm';
import Footer from '../components/Footer';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-cont">
        <Sidebar />
        <div className="user-view">
          <h1 className="section-header">Profile Completeness</h1>
          <h1 className="section-header">Geographical Outlook</h1>
          <Googlemaps />
          <br /><h1 className="section-header">Statistical Outlook</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
