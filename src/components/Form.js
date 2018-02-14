import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      formErrors: ""
    };
  }

  submitForm(e, data) {
    const { postLocation } = this.props;
    e.preventDefault();
    if (data.name && this.checkCoordinates(data)) {
      postLocation(data);
      this.resetInputs(this);
      this.clearErrors();
    } else {
      this.setError();
    }
  }

  setError() {
    this.setState({
      formErrors: "Please enter valid latitude and longitude coordinates."
    });
  }

  clearErrors() {
    this.setState({
      formErrors: ""
    });
  }

  checkCoordinates(data) {
    return (
      parseFloat(data.lng) && Math.abs(data.lng) <= 180 && (parseFloat(data.lat) && Math.abs(data.lat) <= 90)
    );
  }

  resetInputs(form) {
    form.name.value = "";
    form.lat.value = "";
    form.lng.value = "";
  }

  render() {
    const { formErrors } = this.state;
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
        {formErrors ? <p>{formErrors}</p> : ""}
      </form>
    );
  }
}

export default Form;
