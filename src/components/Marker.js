import React, { Component } from "react";
import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import tealdot from "../imgs/tealdot.svg";

class MapMarker extends Component {
  render() {
    let icon = L.icon({
      iconUrl: tealdot,
      iconSize: [15, 15]
    });

    const { location, clickHandler, name } = this.props;

    return (
      <div className="marker-container">
        <Marker position={location} icon={icon} onClick={clickHandler}>
          <Tooltip sticky interactive>
            <div>
              <h4>{name}</h4>
            </div>
          </Tooltip>
        </Marker>
      </div>
    );
  }
}

export default MapMarker;
