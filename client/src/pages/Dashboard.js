import React from "react";
import Sidebar from "../components/Sidebar.js";
import Googlemaps from "../components/Googlemaps.js";
import ProgressBar from "../components/ProgressBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";

class Dashboard extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="dashboard-cont">
        <Sidebar handleToggle={this.handleToggle}/>
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
              <p>Hello World</p>
            </Drawer>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default Dashboard;
