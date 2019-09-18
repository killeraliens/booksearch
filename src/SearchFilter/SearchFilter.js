import React, { Component } from 'react';
import './SearchFilter.css';

class SearchFilter extends Component {
  handleChange = (e) => {
    this.props.selectFreeFilter(e.target.value)
  }

  render() {
    const filterSelected = this.props.freeFilterSelected;
    return(
      <div className="SearchFilter">
        <div className="booktype-filter">
          <label htmlFor="all">
            <input
              type="radio"
              id="all"
              value="All"
              checked={filterSelected === "All"}
              name="filter_free"
              onChange={this.handleChange}
            />
            all
          </label>
          <label htmlFor="free_ebook">
            <input
              type="radio"
              id="free_ebook"
              value="Free"
              checked={filterSelected === "Free"}
              name="filter_free"
              onChange={this.handleChange}
            />
            free e-books only
          </label>
        </div>
      </div>
    )
  }
}

export default SearchFilter;
