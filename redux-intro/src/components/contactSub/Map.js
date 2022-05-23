import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {

  render() {
    return (
      <Map
            google={this.props.google}
            zoom={16}
            initialCenter={{
              lat: 40.3979999,
            lng: 49.8717302,
            }}
          >
            <Marker  
                position={{
                lat: 40.3979999,
                lng: 49.8717302,
                }}
              name={"Current location"}
              icon={{
                url: "/image/marker.svg",
              }}
            >
            </Marker>

          </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA4SgjsTpN_D4nuu-O2Dn8f5aeK7dLjwoQ",
})(MapContainer);
