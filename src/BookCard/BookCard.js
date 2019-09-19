import React, {Component} from 'react';
import './BookCard.css';

class BookCard extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.showDetails(this.props.id);
  }

  render() {
    const { volumeInfo } = this.props;

    let previewImage = volumeInfo.imageLinks && 'smallThumbnail' in volumeInfo.imageLinks
      ? <img className='preview-img'
          src={volumeInfo.imageLinks.smallThumbnail}
          alt={volumeInfo.title}
        />
      : null;

    return(
      <div className="BookCard">
        {previewImage}
        <div className="title-author">
          <h2>title: {volumeInfo.title}</h2>
          <h3>authors: {volumeInfo.authors}</h3>
          <a href='#'onClick={this.handleClick}>View Details</a>
        </div>
      </div>
    )
  }
}

export default BookCard
