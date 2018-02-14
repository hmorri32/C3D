/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import { connect } from "react-redux";
import MapMarker from "./Marker";
import { Polygon } from "react-leaflet";
import { createPolyLine } from "../actions/polygonActions";

class AllMarkers extends Component {
  polygonCity(e) {
    const { lat, lng } = e.latlng;
    const { polyCoordinates, createPolyLine, destroyPolyLine } = this.props;
    const [poly, latlng] = [JSON.stringify({ polyCoordinates }), JSON.stringify([lat, lng])];

    poly.includes(latlng) ? destroyPolyLine([lat, lng]) : createPolyLine([lat, lng]);
  }

  filtered(polyLines, latlng) {
    return polyLines.filter(coord => JSON.stringify(coord) !== latlng);
  }

  render() {
    const { polyCoordinates } = this.props;
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          clickHandler={e => this.polygonCity(e)}
        />
      );
    });

    return (
      <div className="paths-container">
        {markerArray}
        <Polygon color="mediumseagreen" positions={polyCoordinates} />
      </div>
    );
  }
}

export default AllMarkers;
