const PolyLines = (state = { data: [] }, action) => {
  switch (action.type) {
  case "CREATE_POLY_LINE":
    return Object.assign({}, state, {
      data: state.data.concat([action.data])
    });

  case "DESTROY_POLY_LINE":
    // console.log('suh');
    break;

  default:
    return state;
  }
};

export default PolyLines;