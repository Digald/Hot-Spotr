
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Googlemaps extends React.Component {
  static defaultProps = {
    center: {
      lat: 30.27,
      lng: -97.74
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBj2iAiGV1zywVVzlZSaIM1y3VPpCUqRF0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={30.2672}
            lng={-97.7431}
            text={"Austin Texas"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Googlemaps;
