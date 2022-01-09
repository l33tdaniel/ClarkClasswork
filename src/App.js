import SeriesList from './components/SeriesList/SeriesList.js';
import React from 'react';
import Main from './components/Main/Main.js';
class App extends React.Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">TV Series List</h1>
              </header>
            <Main/>
          </div>
      );
  }
}
// for some reason, if I add in series list, it crashes everything

  export default App;
