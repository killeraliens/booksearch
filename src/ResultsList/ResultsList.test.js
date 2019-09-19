import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import ResultsList from './ResultsList';

describe('ResultsList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // it('contains no duplicate titles', () => {

  // })
})
