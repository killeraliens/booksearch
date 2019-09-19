import React, { Component } from 'react';
import './ResultShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class ResultShow extends Component {
  render() {
    if (this.props.book) {
      console.log(this.props.book.volumeInfo);
      const book = this.props.book.volumeInfo;
      const authors = book.authors.join(', ')
      return(
        <div>
          <FontAwesomeIcon icon={faTimesCircle} className="close-btn" onClick={this.props.closeSelected}/>
          <div>
            <h2>{book.title}</h2>
            <h4>{authors}</h4>
          </div>
          <p>{book.description}</p>
        </div>
      )
    } else {
      return null
    }
  }
}

export default ResultShow;
