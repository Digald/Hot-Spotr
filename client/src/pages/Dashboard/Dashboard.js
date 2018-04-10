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
          <Googlemaps />
        </div>
      </div>
    );
  }
}

export default Dashboard;
