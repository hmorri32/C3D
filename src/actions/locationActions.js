require("isomorphic-fetch");

const storeAllLocations = locations => {
  return {
    type: "STORE_LOCATIONS",
    data: locations.locations
  };
};

const storeNewLocation = location => {
  return {
    type: "STORE_LOCATION",
    data: location
  };
};

const fetchAllLocations = () => {
  return dispatch => {
    return fetch("/locations", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

const postLocation = location => {
  return dispatch => {
    return fetch("locations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(location)
    });
  };
};

export { fetchAllLocations, postLocation };
