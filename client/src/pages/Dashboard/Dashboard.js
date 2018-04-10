import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import "./Dashboard.css";
import Googlemaps from "../../components/Googlemaps";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-cont">
        <Sidebar />
        <div className="user-view">
          <h1 className="section-header">Profile Completeness</h1>
          <h1 className="section-header">Geographical Outlook</h1>
          <Googlemaps />
          <h1 className="section-header">Statistical Outlook</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
