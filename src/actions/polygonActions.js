export const createPolyLine = latlng => {
  return {
    type: "CREATE_POLY_LINE",
    data: latlng
  };
};

export const destroyPolyLine = latlng => {
  return {
    type: "DESTROY_POLY_LINE",
    data: latlng
  };
};