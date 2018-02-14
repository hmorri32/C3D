import React, { Component } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import AllMarkers from "../containers/AllMarkers";

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [39.750809, -104.99681],
      newCenter: []
    };
  }

  componentWillReceiveProps(next) {
    if (this.props.locations.length) {
      const { locations } = next;
      const { length } = locations;
      const recentlyPosted = locations[length - 1];
      this.panToNewLocation(recentlyPosted);
    }
  }

  panToNewLocation(location) {
    this.setState({
      newCenter: [location.lat, location.lng]
    });
  }

  render() {
    const { center, newCenter } = this.state;
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={newCenter.length ? newCenter : center}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href=&quot;http://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl position="bottomright" />
          <AllMarkers />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
