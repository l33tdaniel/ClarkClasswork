import Intro from './components/Intro.js';
import React from 'react';
class App extends React.Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">TV Series List</h1>
              </header>
              <Intro message="Here you can find all of your most loved series." />
              The length of series array - {this.state.series.length}
          </div>
      );
  }
  constructor(props) {
      super(props);
      this.state = {
          series: []
      }
  }
}

  export default App;
