import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {loading && <LoadingDots />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};
Header.defaultProps = {};

export default Header;
