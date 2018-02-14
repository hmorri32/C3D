import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      formErrors: ""
    };
  }

  submitForm(e, data) {
    const { lat, lng, name } = data;
    const { postLocation } = this.props;
    e.preventDefault();

    postLocation(data);
  }

  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input; }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input; }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input; }}
            type="text"/>
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;
