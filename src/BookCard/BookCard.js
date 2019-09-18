import React from 'react';

export default function BookCard(props) {
  const { volumeInfo } = props;
  return(
    <div className="BookCard">
      title: {volumeInfo.title}
      authors: {volumeInfo.authors}
    </div>
  )
}
