import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          BookSearch
        </header>
        <SearchBar />
      </div>
    );

  }
}

export default App;
