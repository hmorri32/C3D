/*eslint-disable no-unused-vars*/
import React, { Component } from "react";
import { connect } from "react-redux";
import AllMarkers from "../components/AllMarkers";
import { bindActionCreators } from "redux";
import * as actions from "../actions/polygonActions";

const mapStateToProps = state => {
  return {
    locations: state.Locations.data,
    polyCoordinates: state.PolyLines.data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
