import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchFilter from './SearchFilter/SearchFilter';
import ResultsList from './ResultsList/ResultsList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      freeFilterSelected: 'All',
      results: []
    };
  }

  setSearchTerm = (targetValue) => {
    const p = new Promise((resolve, reject) => {
      resolve( this.setState({searchTerm: targetValue}) )
    });

    p.then(() => {
      if(this.state.searchTerm !== '') {
        this.callApi()
      } else {
        this.setState({results: []})
      }
    })
  }

  callApi = () => {
    let url;

    const apiKey = `AIzaSyBVah7n6CpYTU01YtkKDaFSf5s5RH-2wrw`;
    url = `https://www.googleapis.com/books/v1/volumes?q=search+${this.state.searchTerm}&key=${apiKey}`;

    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-type': 'application/json'
      }
    }

    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }
        return resp.json()
      })
      .then(respJson => {
        console.log(respJson.items)
        this.setState({
          results: respJson.items
        })
      })
      .catch(err => {
        console.log('ERROR', {err})
      })
  }

  handleSelectFreeFilter = (targetValue) => {
    this.setState({
     freeFilterSelected: targetValue
    })
  }



  render() {
    const { searchTerm, freeFilterSelected, results } = this.state;

    return (
      <div className="App">
        <header>
          BookSearch
        </header>
        <SearchBar
          updateInput={this.setSearchTerm}

          searchTerm={searchTerm}
        />
        <SearchFilter
          freeFilterSelected={freeFilterSelected}
          selectFreeFilter={this.handleSelectFreeFilter}
        />
        <ResultsList
          results={results}
        />
      </div>
    );

  }
}

export default App;
