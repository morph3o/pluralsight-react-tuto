import React, {Component} from 'react';
import {Link} from 'react-router';


class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Courses Administration</h1>
        <p>Sagas cantare, tanquam rusticus uria.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
