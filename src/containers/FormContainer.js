import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "../components/Form";
import { postLocation, fetchAllLocations } from "../actions/locationActions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postLocation, fetchAllLocations }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
