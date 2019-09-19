import React from 'react';
import ReactDOM from 'react-dom';
import BookCard from './BookCard';

describe('BookCard', () => {
  it('renders  without crashing', () => {
    const volumeInfoSample = {
      title: 'some title',
      authors: ['some author']
    };
    const div = document.createElement('div');
    ReactDOM.render(<BookCard volumeInfo={volumeInfoSample}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
