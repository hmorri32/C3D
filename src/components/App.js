import React, { Component } from "react";
import LeafletMap from "../components/LeafletMap";
import FormContainer from "../containers/FormContainer";

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {
    const { locations } = this.props;
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap locations={locations} />
      </div>
    );
  }
}

export default App;
