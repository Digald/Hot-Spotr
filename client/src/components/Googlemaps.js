import React from "react";
import GoogleMapReact from "google-map-react";
import { Geometry } from "wkx";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Googlemaps extends React.Component {
  static defaultProps = {
    center: {
      lat: 30.27,
      lng: -97.74
    },
    zoom: 11
  };

  componentDidUpdate() {
    // WHY DOESN'T THIS WORK. I CANNOT ACCESS THE OBJECT. TRY TO UNCOMMENT THE CONSOLE LOG TO SEE WHAT I MEAN
    // console.log(this.props.placesResults[0].geometry);

    // const heatmapPositions = this.props.placesResults.map(i => {
    //   return {
    //     lat: this.props.placesResults[i].geometry.location.lat,
    //     lng: this.props.placesResults[i].geometry.location.lng
    //   }
    // });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBj2iAiGV1zywVVzlZSaIM1y3VPpCUqRF0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={{
            positions: [
              // Replace this single position. This positions arry should be the array of objects with lat/lng from the results. 
              {
                lat: 30.27,
                lng: -97.74
              }
            ],
            options: {
              radius: 20,
              opacity: 0.7,
              gradient: [
                "rgba(0, 255, 255, 0)",
                "rgba(0, 255, 255, 1)",
                "rgba(0, 191, 255, 1)",
                "rgba(0, 127, 255, 1)",
                "rgba(0, 63, 255, 1)",
                "rgba(0, 0, 255, 1)",
                "rgba(0, 0, 223, 1)",
                "rgba(0, 0, 191, 1)",
                "rgba(0, 0, 159, 1)",
                "rgba(0, 0, 127, 1)",
                "rgba(63, 0, 91, 1)",
                "rgba(127, 0, 63, 1)",
                "rgba(191, 0, 31, 1)",
                "rgba(255, 0, 0, 1)"
              ]
            }
          }}
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
