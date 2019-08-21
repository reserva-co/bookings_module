import React from 'react';
import CheckIn from './check.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {price: 95, rating: 4};
  }

  render() {
    return (
      <div id="module-container">
        <div id="module-container-2">
          <a>${this.state.price} per night</a>
          <br></br>
          &#9733;&#9733;&#9733;&#9733;
          <div className="linebreak">
            <hr></hr>
          </div>
          <CheckIn />
        </div>
      </div>
    )
  }
}

export default App;