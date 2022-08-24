import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  // Add your methods in here.
  constructor(props) {
      super(props);
      this.state = {date: new Date()}
    }
  render() {
    return <div></div>;
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));