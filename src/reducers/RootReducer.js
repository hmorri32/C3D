import { combineReducers } from "redux";
import Locations from "./LocationsReducer";
import PolyLines from "./PolygonReducer";

const RootReducer = combineReducers({
  Locations,
  PolyLines
});

export default RootReducer;
