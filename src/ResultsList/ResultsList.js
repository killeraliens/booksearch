import React, {Component} from 'react';
import BookCard from '../BookCard/BookCard';

class ResultsList extends Component {

  filterOutDupes() {
    if (this.props.results) {
      const noDupes =  this.props.results.reduce((accr, result) => {
        const exists = accr.find(prevResult => prevResult.id === result.id);
        if (!exists) {
          return accr.concat([result]);
        } else {
          return accr;
        }
      }, []);
      return noDupes;
    }
    return []
  }

  render() {
    const noDupes = this.filterOutDupes();
    const cards = noDupes.map(result => <BookCard key={result.id} id={result.id} volumeInfo={result.volumeInfo} showDetails={this.props.setSelected}/>)

    return(
      <div>
       {cards.length > 0 ? cards : 'no results'}
      </div>
    )
  }
}

export default ResultsList;
