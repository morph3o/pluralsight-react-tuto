import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {courses} = this.props;

    return (
      <h1>Manage Course</h1>
    );
  }
}

ManageCoursePage.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
