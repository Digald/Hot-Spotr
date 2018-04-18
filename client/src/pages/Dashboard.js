import React from "react";
import Sidebar from "../components/Sidebar.js";
import Googlemaps from "../components/Googlemaps.js";

class Dashboard extends React.Component {
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
