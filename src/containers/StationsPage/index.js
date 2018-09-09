import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLines, fetchStations } from '../../actions/stations';

class StationsPage extends Component {

  componentDidMount() {
    this.props.fetchLines();
    this.props.fetchStations();
  }

  render = () => {
    return(
      <div className="container">

      </div>
    );
  }
}

export default connect(null, { fetchLines, fetchStations })(StationsPage);
