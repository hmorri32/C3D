/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import { connect } from "react-redux";
import MapMarker from "./Marker";
import { Polygon } from "react-leaflet";
import { createPolyLine } from "../actions/polygonActions";

class AllMarkers extends Component {
  constructor() {
    super();
    this.state = {
      polyLines: []
    };
  }

  polygonCity(e) {
    const { lat, lng } = e.latlng;
    const {polyCoordinates} = this.props;
    // const { polyLines } = this.state;
    const [poly, latlng] = [
      JSON.stringify({polyCoordinates}),
      JSON.stringify([lat, lng])
    ];

    this.props.createPolyLine([lat,lng]);



    // poly.includes(latlng)
    //   ? this.setState({ polyLines: this.filtered(polyLines, latlng) })
    //   : this.setState({ polyLines: this.state.polyLines.concat([[lat, lng]]) });
  }

  filtered(polyLines, latlng) {
    return polyLines.filter(coord => JSON.stringify(coord) !== latlng);
  }

  render() {
    const { polyLines } = this.state;
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
        <Polygon color="mediumseagreen" positions={this.props.polyCoordinates} />
      </div>
    );
  }
}

export default AllMarkers;
