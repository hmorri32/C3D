import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      e: ""
    };
  }

  submitForm(e, data) {
    const { postLocation, storeNewLocation } = this.props;
    e.preventDefault();
    postLocation(data)
      .then(data => data.json())
      .then(json => {
        json.error !== undefined
          ? this.setState({ e: json.error })
          : storeNewLocation(json);
      })
      .catch(e => this.setState({ e: e }));
  }

  resetInputs(form) {
    form.name.value = "";
    form.lat.value = "";
    form.lng.value = "";
  }

  render() {
    const { e } = this.state;
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={input => {
              this.name = input;
            }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={input => {
              this.lat = input;
            }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={input => {
              this.lng = input;
            }}
            type="text"
          />
        </label>
        <button
          type="submit"
          onClick={e =>
            this.submitForm(e, {
              name: this.name.value,
              lat: this.lat.value,
              lng: this.lng.value
            })
          }>
          Save
        </button>
        {e ? <p>{e}</p> : ""}
      </form>
    );
  }
}

export default Form;
