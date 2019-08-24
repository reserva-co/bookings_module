/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import CheckIn from './check';
import Calendar from './calendar';
import { fetchPrice } from '../actions/pricesAction';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 95 };
  }

  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  render() {
    const { price } = this.state;
    return (
      <div>
        <div id="module-container">
          <div id="module-container-2">
            <span>
  $
              { price }
              {' '}
  per night
            </span>
            <br />
              &#9733;&#9733;&#9733;&#9733;
            <div className="linebreak">
              <hr />
            </div>
            <CheckIn />
          </div>
        </div>
        <br />
        <br />
        <Calendar />
      </div>
    );
  }
}

export default connect(null, { fetchPrice })(App);
