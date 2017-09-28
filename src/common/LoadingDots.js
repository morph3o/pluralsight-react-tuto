/* eslint-disable react/no-did-mount-set-state */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <img src={'https://protopixel.net/wp-content/themes/blain/images/spinner.gif'} style={{width: '15px'}}/>
    );
  }
}

LoadingDots.propTypes = {
};
LoadingDots.defaultProps = {
};
export default LoadingDots;
