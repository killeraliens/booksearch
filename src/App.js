import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleInputUpdate = (value) => {
    this.setState({
      searchTerm: value
    })
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="App">
        <header>
          BookSearch
        </header>
        <SearchBar
          handleInputUpdate={this.handleInputUpdate}
          searchTerm={searchTerm}
        />
      </div>
    );

  }
}

export default App;
