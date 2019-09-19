import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchFilter from './SearchFilter/SearchFilter';
import ResultsList from './ResultsList/ResultsList';
import ResultShow from './ResultShow/ResultShow';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      freeFilterSelected: 'All',
      results: [],
      selected: null,
      showDetails: false
    };
  }

  setSearchTerm = (targetValue) => {
    const p = new Promise((resolve, reject) => {
      resolve( this.setState({searchTerm: targetValue}) )
    });

    p.then(() => {
      if(this.state.searchTerm !== '') {
        this.callApiQueryTerm()
      } else {
        this.setState({results: []})
      }
    })
  }

  callApiQueryTerm = () => {
    let url;
    const apiKey = `AIzaSyBVah7n6CpYTU01YtkKDaFSf5s5RH-2wrw`;

    this.state.freeFilterSelected === 'Free'
      ? url = `https://www.googleapis.com/books/v1/volumes?q=search+${this.state.searchTerm}&filter=free-ebooks&key=${apiKey}`
      : url = `https://www.googleapis.com/books/v1/volumes?q=search+${this.state.searchTerm}&key=${apiKey}`;
    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }
        return resp.json()
      })
      .then(respJson => {
        console.log(respJson)
        this.setState({
          results: respJson.items,
          error: null,
          showDetails: false,
          selected: null
        })
      })
      .catch(err => {
        // console.log('ERROR', {err})
        this.setState({
          error: err.message
        })
      })
  }

  setFreeFilter = (targetValue) => {
    const p = new Promise((resolve, reject) => {
      resolve(this.setState({ freeFilterSelected: targetValue }))
    });

    p.then(() => {
      if(this.state.searchTerm !== '') {
        this.callApiQueryTerm()
      } else {
        this.setState({results: []})
      }
    })
  }

  setSelected = (id) => {
    const selected = this.state.results.find(result => result.id === id);
    this.setState({
      selected,
      error: null
    })
  }

  closeSelected = () => {
    this.setState({
      selected: null
    })
  }

  render() {
    const { searchTerm, freeFilterSelected, results, selected, showDetails } = this.state;
    const displayContent = selected
    ?  <ResultShow book={selected} closeSelected={this.closeSelected}/>
    :  <ResultsList
          results={results}
          setSelected={this.setSelected}
        />


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
          selectFreeFilter={this.setFreeFilter}
        />
        {displayContent}
      </div>
    );

  }
}

export default App;
