import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "../components/Form";
import { postLocation } from "../actions/locationActions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
