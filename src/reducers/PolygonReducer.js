const PolyLines = (state = { data: [] }, action) => {
  switch (action.type) {
    case "CREATE_POLY_LINE":
      return Object.assign({}, state, {
        data: state.data.concat([action.data])
      });

    case "DESTROY_POLY_LINE":
      return Object.assign({}, state, {
        data: filtered(state.data, action.data)
      });
    default:
      return state;
  }
};

const filtered = (polyLines, latlng) => {
  return polyLines.filter(
    coord => JSON.stringify(coord) !== JSON.stringify(latlng)
  );
};

export default PolyLines;