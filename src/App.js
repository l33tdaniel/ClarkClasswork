import Intro from './components/Intro.js';
import SeriesList from './components/SeriesList/SeriesList.js';
import React from 'react';
import Series from './containers/Series/Series.js';
class App extends React.Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">TV Series List</h1>
              </header>
              <Intro message="Here you can find all of your most loved series." />
              <Series></Series>

          </div>
      );
  }
}
// for some reason, if I add in series list, it crashes everything

  export default App;
