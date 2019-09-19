import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResultShow from './ResultShow';

describe('ResultShow', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultShow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
