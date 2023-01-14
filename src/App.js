import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.counter= this.counter.bind(this);
    this.state ={ value :0 }
  }

  render() {
    return (
      <div className="container">
          <textarea rows="3" onKeyUp={this.counter}></textarea>
        <div className="counter" >{this.state.value}</div>
      </div>
    );
  }
  counter(){
    this.setState({value: this.state.value + 1});
  }
}

export default App;
