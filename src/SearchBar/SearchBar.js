import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {


  handleChange = (e) => {
    this.props.updateInput(e.target.value);
    //this.props.callApi();
  }

  render() {
    return(
      <div className="SearchBar">
        <label htmlFor="searchInput">Search by Title or Author</label>
        <input
          type="text"
          id="searchInput"
          placeholder="Les Miserables"
          value={this.props.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SearchBar;
