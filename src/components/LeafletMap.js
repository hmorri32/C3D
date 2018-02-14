import React, { Component } from "react";
import { Map, TileLayer, ZoomControl, LayersControl } from "react-leaflet";
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
    const { BaseLayer, Overlay } = LayersControl;

    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={newCenter.length ? newCenter : center}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}>
          <LayersControl position="topright">
            <BaseLayer name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={10}
                minZoom={2}
              />
            </BaseLayer>
            <BaseLayer name="OpenStreetMap.BlackAndWhite">
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                maxZoom={10}
                minZoom={2}
              />
            </BaseLayer>
            <BaseLayer name="OpenSurferRoads">
              <TileLayer
                attribution="Imagery from http://giscience.uni-hd.de/ GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy;"
                url="https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}"
                maxZoom={10}
                minZoom={2}
              />
            </BaseLayer>
            <BaseLayer checked name="NatGeo">
              <TileLayer
                attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                maxZoom={10}
                minZoom={2}
              />
            </BaseLayer>
          </LayersControl>
          <ZoomControl position="bottomright" />
          <AllMarkers />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
