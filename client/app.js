import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <a>$95 per night</a>
        <br></br>
        <a>*****</a>
        <hr></hr>
        <a>Dates</a>
        {/* Check-in Check-out */}
      </div>
    )
  }
}

export default App;