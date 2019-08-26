/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CheckIn from './check';
import Calendar from './calendar';
import fetchPrice from '../actions/pricesAction';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPrice();
  }

  render() {
    const { price } = this.props;
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

App.propTypes = {
  fetchPrice: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  price: state.price.price,
});

// gives price to this.props in App


const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPrice()); },
});

// gives fetchPrice to this.props in App

export default connect(mapStateToProps, mapDispatchToProps)(App);
