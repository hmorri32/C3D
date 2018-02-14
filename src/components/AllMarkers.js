/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import { connect } from "react-redux";
import MapMarker from "./Marker";
import { Polygon } from "react-leaflet";
import { createPolyLine } from "../actions/polygonActions";

class AllMarkers extends Component {
  polygonHandler(e) {
    const { lat, lng } = e.latlng;
    const { polyCoordinates, createPolyLine, destroyPolyLine } = this.props;
    const [poly, latlng] = [
      JSON.stringify({ polyCoordinates }),
      JSON.stringify([lat, lng])
    ];

    poly.includes(latlng)
      ? destroyPolyLine([lat, lng])
      : createPolyLine([lat, lng]);
  }

  renderMarkers() {
    return this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          clickHandler={e => this.polygonHandler(e)}
        />
      );
    });
  }

  render() {
    const { polyCoordinates } = this.props;
    return (
      <div className="paths-container">
        {this.renderMarkers()}
        <Polygon color="mediumseagreen" positions={polyCoordinates} />
      </div>
    );
  }
}

export default AllMarkers;
